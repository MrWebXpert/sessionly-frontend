"use client"
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminChangePassword from "@/components/changepassword/AdminChangePassword";

const Page = () => {
    const router = useRouter()

    const { id } = useParams()
    console.log(id)
    const [formaData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    })
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/get/${id}`);

                const { username, email, phone } = response.data.verifyAdmin;
                console.log("userdata in edit page", response.data.verifyAdmin)
                setFormData({ username, email, phone });
            } catch (error) {
                console.error("Error fetching user data", error.message);
                toast.error("Failed to fetch user data");
            }
        };

        fetchUserData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setFormData({ ...formaData, [name]: value })
    }
    console.log(formaData)
    const updateAdmin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/update/${id}`, formaData)
            console.log(response)
            toast.success(response.data.message)
            router.push('/dashboard/admin/profile')
        } catch (error) {
            console.error("Error While updating admin", error.message)
            toast.error("admin not updated")
        }

    }

    return (
        <div>
            <div className="p-10 space-y-6">
                <div className="flex items-end justify-between">
                    {/* <img
                        className="inline-flex object-cover border-4 border-[#10b981] rounded-full bg-indigo-50 h-28 w-28  mb-4 md:mb-0 ml-0 md:mr-5"
                        src="https://media.istockphoto.com/id/1457948354/photo/successful-businesswoman-in-modern-office-working-on-laptop.jpg?s=1024x1024&w=is&k=20&c=X8KTk6fECCQOEroqDivRAVF7U3mU5f-qrkOO4nbw9r0="
                        alt=""
                    /> */}
                    <div>
                        <button className="bg-[#10b981]  px-3 py-3 mt-11 ml-4  text-white font-bold  border rounded">
                            Uplaod Profile Image
                        </button>
                    </div>
                </div>
                <form onSubmit={updateAdmin}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                for="product-name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="product-name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-[#10b981] block w-full p-2.5"
                                placeholder="Enter your name ”"

                                onChange={handleChange}
                                value={formaData.username}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                for="category"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="category"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-[#10b981] block w-full p-2.5"
                                placeholder="123@gamil"

                                onChange={handleChange}
                                value={formaData.email}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                for="brand"
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
                                value={formaData.phone}
                            />
                        </div>

                    </div>

                    <div className="flex justify-end mt-10 mr-1 ">
                        <button className="bg-[#10b981]  px-10 py-2   text-white font-bold  border rounded " type="submint">
                            Update Profile
                        </button>
                    </div>
                </form>
                <AdminChangePassword></AdminChangePassword>
            </div>
        </div>
    );
};
export default Page;