"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreateRoom = () => {
    const [email, setEmail] = useState('');
    const [emails, setEmails] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();

    const handleAddEmail = () => {
        if (email && !emails.includes(email)) {
            setEmails([...emails, email]);
            setEmail('');
        }
    };

    const handleCreateRoom = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/create/room`, {
                name,
                description,
                users: emails
            });
            if (response.status === 200) {
                router.push(`/dashboard/video-call/${response.data.room._id}/${response.data.room.roomKey}`);
            }
        } catch (error) {
            console.error('Error creating room:', error);
        }
    };

    return (
        <div className="container p-4 pt-6 pb-8 mx-auto bg-white rounded shadow-md">
            <h1 className="mb-4 text-3xl font-bold">Create Room</h1>
            <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter room name"
                        className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter room description"
                        className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter student email"
                        className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                    />
                    <button
                        className="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700"
                        onClick={handleAddEmail}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-lg font-bold text-gray-800">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emails.map((email, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td className="px-4 py-2 text-lg">{email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <button
                    onClick={handleCreateRoom}
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Create Room
                </button>
            </div>
        </div>
    );
};

export default CreateRoom;