const Chat = () => {
    return (
        <div className="flex flex-col h-full p-4 text-white bg-gray-800 border rounded-lg">
            <div className="flex-1 overflow-y-auto">
                <div className="mb-4">
                    <span className="font-bold">User 1:</span> Hello!
                </div>
                <div className="mb-4">
                    <span className="font-bold">User 2:</span> Hi!
                </div>
            </div>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Type a message"
                    className="w-full p-2 bg-gray-700 rounded"
                />
            </div>
        </div>
    );
};

export default Chat;
