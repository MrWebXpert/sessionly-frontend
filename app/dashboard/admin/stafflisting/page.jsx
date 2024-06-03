"use client";
import Table from "@/components/table/table";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
    const router = useRouter();

    const [experts, setEperts] = useState([])

    useEffect(() => {
        const allstudents = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/all`
            );
            console.log(response.data.data);
            if (response) {
                setEperts(response.data.data);
            }
        };
        allstudents();
    }, []);

    return (
        <div className="bg-gray-100">
            < div className="table w-full">
                <div className="flex items-center justify-between p-4 mb-5 bg-white border rounded-md ">
                    <h1>Student Listing</h1>
                </div>

                <div class="px-4 bg-[#10b981]">
                    <div class="">
                        <table class="w-full px-6 py-3 overflow-hidden text-center rounded-lg">
                            <thead class="bg-[#10b981]">
                                <tr>
                                    <th class="px-6 py-3 font-bold text-start text-xs text-gray-800 uppercase tracking-wider w-[25%]" >
                                        Student ID
                                    </th>
                                    <th class="px-6 py-3 font-bold text-start text-xs text-gray-800 uppercase tracking-wider w-[25%]" >
                                        Email
                                    </th>
                                    <th class="px-6 py-3 font-bold text-start text-xs text-gray-800 uppercase tracking-wider w-[25%]" >
                                        Phone
                                    </th>
                                    <th class="px-6 py-3 font-bold text-start text-xs text-gray-800 uppercase tracking-wider w-[25%]" >
                                        UserType
                                    </th>
                                </tr>
                            </thead>
                        </table>
                        {experts &&
                            experts.map((expert, index) => (
                                <div className="overflow-x-auto">
                                    <table className="table w-full">
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 text-sm border border-gray-300 text-start w-[25%]" >
                                                    {expert?._id}
                                                </td>
                                                <td className="px-6 py-4 border border-gray-300 text-start w-[25%]" >
                                                    {expert?.email}
                                                </td>
                                                <td className="px-6 py-4 text-left border border-gray-300 w-[25%]" >
                                                    {expert?.phone}
                                                </td>
                                                <td className="px-6 py-4 border border-gray-300 text-start w-[25%]" >
                                                    {expert?.userType}
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

export default Page;