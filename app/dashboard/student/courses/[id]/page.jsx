"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
    const router = useRouter();
    const [course, setCourse] = useState({});
    const [studentId, setStudentId] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/course/get/${id}`
            );
            if (response) {
                setCourse(response.data.data);
            }
        };
        fetchCourse();
    }, [id]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedStudentId = localStorage.getItem('studentId');
            setStudentId(storedStudentId);
        }
    }, []);

    const handleSendPaymentPage = (courseId) => {
        router.push(`/dashboard/payment/${courseId}`);
    };

    return (
        <>
            <section className="overflow-hidden text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap mx-auto lg:w-4/5">
                        <img alt="ecommerce" className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src="https://dummyimage.com/400x400" />
                        <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                            <h2 className="text-sm tracking-widest text-gray-500 title-font">Course Name</h2>
                            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">{course.title}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {[...Array(4)].map((_, index) => (
                                        <svg key={index} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#10b981]" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#10b981"></path>
                                        </svg>
                                    ))}
                                    <span className="ml-3 text-gray-600">4 Reviews</span>
                                </span>
                                <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s gap-x-4">
                                    {['facebook', 'twitter', 'instagram'].map((platform, index) => (
                                        <a key={index} className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d={platform === 'facebook' ? 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' : platform === 'twitter' ? 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' : 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'} fill="#10b981"></path>
                                            </svg>
                                        </a>
                                    ))}
                                </span>
                            </div>
                            <p className="leading-relaxed">{course.description}</p>
                            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                                <div className="flex flex-col gap-y-4">
                                    <span className="mr-3">Start Date : {course.startDate}</span>
                                    <span className="mr-3">End Date : {course.endDate}</span>
                                    <span className="mr-3">Duration : {course.duration}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-2xl font-medium text-gray-900 title-font">$58.00</span>
                                <button className="flex ml-auto text-white bg-[#10b981] border-0 py-2 px-6 focus:outline-none  rounded" onClick={() => handleSendPaymentPage(course._id)}>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
