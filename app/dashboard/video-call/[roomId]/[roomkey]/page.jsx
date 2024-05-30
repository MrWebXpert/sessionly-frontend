"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import io from "socket.io-client";
import SimplePeer from "simple-peer";

const VideoCallPage = ({ params }) => {
    const router = useRouter();
    const { roomId, roomkey } = params;

    console.log(params.roomkey);

    console.log("Room ID:", roomId, "Room Key from Params:", roomkey);

    const [stream, setStream] = useState(null);
    const [peers, setPeers] = useState([]);
    const [enteredRoomKey, setEnteredRoomKey] = useState("");
    const [isRoomKeyValid, setIsRoomKeyValid] = useState(false);
    const userVideo = useRef();
    const peersRef = useRef([]);
    const socket = useRef();

    useEffect(() => {
        socket.current = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);

        socket.current.on("connect", () => {
            console.log("Socket connected");
            if (roomId && isRoomKeyValid) {
                console.log("Attempting to join room", roomId);
                socket.current.emit("joinRoom", { roomId, roomKey: enteredRoomKey });
            }
        });

        socket.current.on("disconnect", () => {
            console.log("Socket disconnected");
        });

        socket.current.on("roomCreated", ({ roomId, roomKey }) => {
            console.log(`Room created with ID: ${roomId} and Key: ${roomKey}`);
            router.push(`/video-call/${roomId} / ${roomKey}`);
        });

        socket.current.on("roomError", (message) => {
            console.error("Room error:", message);
            alert(message);
            router.push("/create-room");
        });

        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                setStream(stream);

                if (userVideo.current) {
                    userVideo.current.srcObject = stream;
                }

                socket.current.on("allUsers", async (users) => {
                    console.log("All users in the room:", users);
                    const newPeers = await Promise.all(
                        users.map(async (userID) => {
                            const peer = createPeer(userID, socket.current.id, stream);
                            peersRef.current.push({
                                peerID: userID,
                                peer,
                            });
                            return { peerID: userID, peer };
                        })
                    );
                    setPeers(newPeers);
                });

                socket.current.on("userJoined", (payload) => {
                    console.log("User joined:", payload.callerID);
                    const peer = addPeer(payload.signal, payload.callerID, stream);
                    peersRef.current.push({
                        peerID: payload.callerID,
                        peer,
                    });
                    setPeers((prevPeers) => [
                        ...prevPeers,
                        { peerID: payload.callerID, peer },
                    ]);
                });

                socket.current.on("receivingReturnedSignal", (payload) => {
                    console.log("Receiving returned signal from:", payload.id);
                    const item = peersRef.current.find((p) => p.peerID === payload.id);
                    if (item) {
                        item.peer.signal(payload.signal);
                    }
                });

                socket.current.on("userDisconnected", (userID) => {
                    console.log("User disconnected:", userID);
                    const peerObj = peersRef.current.find((p) => p.peerID === userID);
                    if (peerObj) {
                        peerObj.peer.destroy();
                        peersRef.current = peersRef.current.filter((p) => p.peerID !== userID);
                        setPeers((prevPeers) => prevPeers.filter((p) => p.peerID !== userID));
                    }
                });
            })
            .catch((error) => {
                console.error("Error getting user media:", error);
            });
    }, [roomId, isRoomKeyValid]);

    const handleRoomKeySubmit = (e) => {
        e.preventDefault();
        console.log("Entered room key:", enteredRoomKey);
        console.log("Room key from params:", roomkey);
        if (enteredRoomKey === roomkey) {
            setIsRoomKeyValid(true);
        } else {
            alert("Invalid room key");
        }
    };

    function createPeer(userToSignal, callerID, stream) {
        const peer = new SimplePeer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", (signal) => {
            socket.current.emit("sendingSignal", { userToSignal, callerID, signal });
        });

        peer.on("stream", (remoteStream) => {
            setPeers((users) =>
                users.map((user) => {
                    if (user.peerID === userToSignal) {
                        return { ...user, stream: remoteStream };
                    }
                    return user;
                })
            );
        });

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new SimplePeer({
            initiator: false,
            trickle: false,
            stream,
        });

        peer.on("signal", (signal) => {
            socket.current.emit("returningSignal", { signal, callerID });
        });

        peer.on("stream", (remoteStream) => {
            setPeers((prevPeers) =>
                prevPeers.map((user) =>
                    user.peerID === callerID ? { ...user, stream: remoteStream } : user
                )
            );
        });

        peer.on("close", () => {
            peersRef.current = peersRef.current.filter((p) => p.peerID !== callerID);
            setPeers((prevPeers) => prevPeers.filter((user) => user.peerID !== callerID));
        });

        peer.signal(incomingSignal);

        return peer;
    }

    if (!isRoomKeyValid) {
        return (
            <div className="room-key-form">
                <form onSubmit={handleRoomKeySubmit}>
                    <label htmlFor="roomKey">Enter Room Key:</label>
                    <input
                        type="text"
                        id="roomKey"
                        value={enteredRoomKey}
                        onChange={(e) => setEnteredRoomKey(e.target.value)}
                        required
                    />
                    <button type="submit">Join Room</button>
                </form>
            </div>
        );
    }

    return (
        <div className="video-container">
            <video ref={userVideo} autoPlay playsInline muted className="own-video" />
            <div className="flex flex-wrap justify-center">
                {peers.map(({ peerID, stream }) => (
                    <Video key={peerID} stream={stream} className="peer-video" />
                ))}
            </div>
        </div>
    );
};

const Video = ({ stream }) => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current && stream) {
            ref.current.srcObject = stream;
        }
    }, [stream]);

    return <video ref={ref} autoPlay playsInline className="w-screen" />;
};

export default VideoCallPage;