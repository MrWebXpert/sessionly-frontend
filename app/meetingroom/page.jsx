import Chat from "./roomcomponents/chat";
import VideoGrid from "./roomcomponents/videoGrid";


export default function Home() {
    return (
        <div className="flex h-screen">
            <VideoGrid />
            <div className="w-1/3 bg-gray-900">
                <Chat />
            </div>
        </div>
    );
}
