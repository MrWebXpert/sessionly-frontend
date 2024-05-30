"use client";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { useEffectAsync } from "@/utils/react";
import { toast } from "react-toastify";
import Link from "next/link";
import TaskApi from "@/app/api/task";
import axios from "axios";

const page = () => {
    const router = useRouter()
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const allCourses = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/course/all`);
            if (response) {
                setCourses(response.data.data);
            }
        };
        allCourses();
    }, []);
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {courses && courses.map((course, index) => (
                            <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer" key={course._id} onClick={() => { router.push(`/dashboard/student/courses/${course._id}`) }}>
                                <div className="bg-gray-100 p-6 rounded-lg overflow-hidden">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Course Name</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{course.title}</h2>
                                    <p className="leading-relaxed text-base">{course.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
