"use client";
import React, { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { useRouter } from "next/navigation";
import axios from "axios";
const Student = () => {
    const router = useRouter();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const expertId = localStorage.getItem("id")
        console.log(expertId, "expert id")
        const allSession = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/get/${expertId}`)
            console.log(response.data.courses.course)
            if (response) {
                setSessions(response.data.courses.course)
            }
        }
        allSession();
    }, []);

    console.log("Here is sessiob array", sessions)

    return (
        <div className="bg-[#10b981] ">
            <div className="table w-full">
                <div className="flex items-center p-4 mb-5 bg-white border rounded-md ">
                    <h1 className="mr-4 text-xl">Session Listing</h1>
                    <button
                        className="bg-[#10b981] py-2 px-4 text-white rounded-md"
                        onClick={() => router.push("/dashboard/session/sessioncreate")}
                    >
                        Add Session
                    </button>
                </div>
                <div className="px-4 ">
                    <div className="">
                        <table className="w-full px-6 py-3 overflow-hidden text-center rounded-lg">


                            <thead className="bg-[#10b981]">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[6%]">
                                        S.No
                                    </th>
                                    {/* <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[12%]">
                                        Session Images
                                    </th> */}
                                    <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[15%]">
                                        Session Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[11%]">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[11%]">
                                        Subcategory
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs ffont-bold text-gray-800 uppercase tracking-wider w-[11%]">
                                        Duration
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[11%]">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[11%]">
                                        Image
                                    </th>
                                </tr>
                            </thead>
                        </table>
                        {sessions.map((session, index) => (

                            <div className="overflow-x-auto ">
                                <table className="table">
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap w-[6%]">
                                                {index + 1}
                                            </td>
                                            {/* <td className="px-6 py-4 whitespace-nowrap w-[12%]">
                                                <img
                                                    src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                    alt="Avatar Tailwind CSS Component"
                                                    className="w-12 h-12 rounded-full"
                                                />
                                            </td> */}
                                            <td className="px-6 py-4 whitespace-nowrap w-[15%]">
                                                {session.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                                                {session.category}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                                                {session.subCategory}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                                                {session.duration}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                                                {session.sessionPrice}

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                                                <img src={session.image} alt="session image" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student;