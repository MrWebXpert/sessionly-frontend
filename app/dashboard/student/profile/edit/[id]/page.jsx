"use client";
import StaffChangePassword from "@/components/changepassword/StaffChangePassword";
import StudentChangePassword from "@/components/changepassword/StudentChangePassword";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
    const router = useRouter();
    const { id } = useParams();
    console.log("id for expert in edit page", id);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: ""
    });

    const [token, setToken] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedToken = localStorage.getItem("token");
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/student/get/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const { username, email, phone } = response.data.verifyStudent;
                console.log("userdata in edit page", response.data.verifyStudent);
                setFormData({ username, email, phone });
            } catch (error) {
                console.error("Error fetching user data", error.message);
                toast.error("Failed to fetch user data");
            }
        };

        if (token) {
            fetchUserData();
        }
    }, [id, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setFormData({ ...formData, [name]: value });
    };
    console.log(formData);

    const updateAdmin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/student/update/${id}`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(response);
            toast.success(response.data.message);
            router.push('/dashboard/student/profile');
        } catch (error) {
            console.error("Error While updating admin", error.message);
            toast.error("staff not updated");
        }
    };

    return (
        <div>
            <div className="p-10 space-y-6">
                <div className="flex items-end justify-between">
                    <div>
                        <button className="bg-[#10b981] px-3 py-3 mt-11 ml-4 text-white font-bold border rounded">
                            Upload Profile Image
                        </button>
                    </div>
                </div>
                <form onSubmit={updateAdmin}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="product-name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="product-name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-[#10b981] block w-full p-2.5"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                value={formData.username}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="category"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="category"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-[#10b981] block w-full p-2.5"
                                placeholder="123@gmail.com"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="brand"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="brand"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-[#10b981] block w-full p-2.5"
                                placeholder="111 222 333"
                                onChange={handleChange}
                                value={formData.phone}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-10 mr-1">
                        <button className="bg-[#10b981] px-10 py-2 text-white font-bold border rounded" type="submit">
                            Update Profile
                        </button>
                    </div>
                </form>
                <StudentChangePassword />
            </div>
        </div>
    );
};
export default Page;
