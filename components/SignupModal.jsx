"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignupModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [phone, setPhone] = useState("")
    const [avatar, setAvatar] = useState(null)

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        console.log("Signup successful!");
        onClose();
    };
    const handleFileChange = (e) => {
        const uploadImage = e.target.files && e.target.files[0]
        if (uploadImage) {
            setAvatar(uploadImage)
        }
    }

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();

        const SignUpData = {
            username: name,
            email,
            password,
            phone,
            avatar,

        };
        const formData = new FormData()
        formData.append("image", avatar || "")
        formData.append("username", name)
        formData.append("password", password)
        formData.append("phone", phone)
        formData.append('email', email)
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/register`,
                formData
            );

            console.log(response);
            if (response) {
                localStorage.setItem("userType", response.data.result.userType);
                localStorage.setItem("expertId", response.data.result._id);
                toast.success("Staff Created Successfully");
                setName("");
                setEmail("");
                setPassword("");
                setPhone("")
            }
            router.push("/experts/details");
        } catch (error) {
            console.error("Error Registering Staff", error.message);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-1/2 p-6 bg-white rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute px-4 py-2 text-white bg-red-500 rounded top-2 right-2"
                >
                    X
                </button>
                <form onSubmit={handleSubmit} className="mt-6">
                    <label className="block mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full p-2 pl-10 text-sm text-gray-700 border rounded-sm focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <label className="block mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full p-2 pl-10 text-sm text-gray-700 border rounded-sm focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <label className="block mb-2" htmlFor="password">
                        Phone:
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="block w-full p-2 pl-10 text-sm text-gray-700 border rounded-sm focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <label className="block mb-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-2 pl-10 text-sm text-gray-700 border rounded-sm focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="block w-full p-2 pl-10 text-sm text-gray-700 border rounded-sm focus:outline-none focus:ring focus:border-blue-500"
                    />

                    {error && <div className="mb-2 text-sm text-red-500">{error}</div>}
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-blue-500 rounded"
                            onClick={handleSubmitSignUp}
                        >
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;