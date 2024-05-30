"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const StudentBookedCoursesPage = () => {
    const [bookedCourses, setBookedCourses] = useState([]);
    const [studentId, setStudentId] = useState(null); // State to store studentId
    const router = useRouter();

    useEffect(() => {
        // Fetch studentId from localStorage on the client side
        if (typeof window !== "undefined") {
            const id = localStorage.getItem('id');
            if (id) {
                setStudentId(id);
            }
        }
    }, []);

    useEffect(() => {
        const fetchBookedCourses = async () => {
            if (studentId) {
                try {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/bookedcourse/${studentId}`);
                    setBookedCourses(response.data.data);
                } catch (error) {
                    console.error(error);
                    toast.error("Error fetching booked courses");
                }
            }
        };

        fetchBookedCourses();
    }, [studentId]);
    console.log(bookedCourses)
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {bookedCourses.length > 0 ? (
                        bookedCourses.map((booking) => (
                            <div key={booking.course._id} className="p-4 cursor-pointer md:w-1/3" onClick={() => {
                                router.push(`/dashboard/student/bookings/${booking.course._id}`)
                            }}>
                                {console.log(booking.course)}
                                <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                                    <img
                                        className="object-cover object-center w-full lg:h-48 md:h-36"
                                        src="https://dummyimage.com/720x400"
                                        alt="course"
                                    />
                                    <div className="p-6">
                                        <h1 className="mb-3 text-2xl font-semibold">Session Name : {booking.course.title}</h1>
                                        <p className="leading-relaxed mb">Session Category : {booking.course.category}</p>
                                        <p className="leading-relaxed mb">Sub Category : {booking.course.subCategory}</p>
                                        <div className="flex flex-wrap items-center">
                                            <span className="mr-3 text-gray-600">Duration: {booking.course.duration} days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4">
                            <h2 className="text-2xl font-medium text-gray-900">No booked courses found</h2>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default StudentBookedCoursesPage;
