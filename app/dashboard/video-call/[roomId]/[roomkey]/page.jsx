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
            router.push(`/video-call/${roomId}/${roomKey}`);
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
                        peersRef.current = peersRef.current.filter(
                            (p) => p.peerID !== userID
                        );
                        setPeers((prevPeers) =>
                            prevPeers.filter((p) => p.peerID !== userID)
                        );
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

    const handleEndCall = () => {
        // Destroy all peers
        peersRef.current.forEach(({ peer }) => peer.destroy());
        setPeers([]);

        // Close user media stream
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
        }

        // Disconnect socket
        socket.current.disconnect();

        // Redirect to home or another page
        router.push("/dashboard/session");
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
            setPeers((prevPeers) =>
                prevPeers.filter((user) => user.peerID !== callerID)
            );
        });

        peer.signal(incomingSignal);

        return peer;
    }

    if (!isRoomKeyValid) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100 room-key-form">
                <form
                    onSubmit={handleRoomKeySubmit}
                    className="p-6 bg-white rounded shadow-md"
                >
                    <label
                        htmlFor="roomKey"
                        className="block mb-2 text-lg font-medium text-gray-700"
                    >
                        Enter Room Key:
                    </label>
                    <input
                        type="text"
                        id="roomKey"
                        value={enteredRoomKey}
                        onChange={(e) => setEnteredRoomKey(e.target.value)}
                        required
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                        type="submit"
                    >
                        Join Room
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 video-container">
            <div className="w-full max-w-4xl p-4 bg-white rounded shadow-md">
                <video
                    ref={userVideo}
                    autoPlay
                    playsInline
                    muted
                    className="w-full mb-4 rounded-lg own-video"
                />
                <div className="grid grid-cols-2 gap-4">
                    {peers.map(({ peerID, stream }) => (
                        <Video
                            key={peerID}
                            stream={stream}
                            className="w-full h-64 rounded-lg shadow peer-video"
                        />
                    ))}
                </div>
                <button
                    onClick={handleEndCall}
                    className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-700"
                >
                    End Call
                </button>
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

    return (
        <video
            ref={ref}
            autoPlay
            playsInline
            className="w-full h-full rounded-lg"
        />
    );
};

export default VideoCallPage;
