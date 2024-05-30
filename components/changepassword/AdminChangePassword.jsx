"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ChangePassword = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [token, setToken] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const changePassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/changepassword`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success(response.data.message);
            router.push('/dashboard/admin/profile');
        } catch (error) {
            console.error("Error while updating password", error.message);
            toast.error("Invalid credentials");
        }
        setFormData({
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    return (
        <div>
            <form onSubmit={changePassword}>
                <h1 className='my-4 font-bold'>Change Password</h1>
                <div className="col-span-6 my-4 sm:col-span-3">
                    <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-900">
                        Old Password
                    </label>
                    <input
                        type="password"
                        name="oldPassword"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-[#10b981] block w-full p-2.5"
                        placeholder="*"
                        required
                        onChange={handleChange}
                        value={formData.oldPassword}
                    />
                </div>
                <div className="col-span-6 my-4 sm:col-span-3">
                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900">
                        New Password
                    </label>
                    <input
                        type="password"
                        name="newPassword"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-[#10b981] block w-full p-2.5"
                        placeholder="*"
                        required
                        onChange={handleChange}
                        value={formData.newPassword}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id='confirmPassword'
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-[#10b981] block w-full p-2.5"
                        placeholder="*"
                        required
                        onChange={handleChange}
                        value={formData.confirmPassword}
                    />
                </div>
                <div className="flex justify-end mt-10 mr-1">
                    <button className="bg-[#10b981] px-10 py-2 text-white font-bold border rounded" type="submit">
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
