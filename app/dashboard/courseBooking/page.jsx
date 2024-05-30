"use client";
import Table from "@/components/table/table";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

const Page = () => {
    const router = useRouter();

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const allbookings = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/bookings`);
            console.log(response.data.data.data);
            if (response) {
                setBookings(response.data.data);
            }
        };
        allbookings();
    }, []);
    console.log(bookings)

    return (
        <div className="bg-gray-100">
            <div className="table w-full">
                <div className="flex items-center justify-between p-4 mb-5 bg-white border rounded-md ">
                    <h1>Course Booking </h1>
                </div>

                <div className="flex flex-wrap items-center px-4">
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <div key={booking._id} className="w-1/3 p-4">
                                <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                                    <img
                                        className="object-cover object-center w-full lg:h-48 md:h-36"
                                        src="https://dummyimage.com/720x400"
                                        alt="course"
                                    />
                                    <div className="p-6">
                                        <h2 className="mb-1 text-base font-medium text-gray-500">Course Name</h2>
                                        <h1 className="mb-3 text-2xl font-semibold">{booking?.course?.title}</h1>
                                        <p className="mb-3 leading-relaxed">{booking?.course?.description}</p>
                                        <div className="flex flex-col flex-wrap items-start">
                                            <span className="mr-3 text-gray-600">Start Date: {new Date(booking?.course?.startDate).toLocaleDateString()}</span>
                                            <span className="mr-3 text-gray-600">End Date: {new Date(booking?.course?.endDate).toLocaleDateString()}</span>
                                            <span className="mr-3 text-gray-600">Duration: {booking?.course?.duration} days</span>
                                            <span className="mr-3 text-gray-600">Booked By: {booking?.student?.username}</span>
                                            <span className="mr-3 text-gray-600">Student  Email: {booking?.student?.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4">
                            <h2 className="text-2xl font-medium text-gray-900">No bookings found</h2>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Page;