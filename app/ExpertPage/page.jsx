"use client"
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TeacherCard = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        const allExpert = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/all`
                );
                console.log(response.data.data);
                if (response) {
                    setExperts(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        allExpert();
    }, []);

    console.log(experts)
    return (

        <>
            <Navbar />
            <div className="flex flex-col items-center justify-between px-10 py-10 md:flex-row md:py-20 md:px-40">
                <div className="w-full  font-sans md:w-[600px] mb-6 md:mb-0">
                    <h1 className="mb-3 text-3xl font-bold md:text-4xl">
                        Find your <span className="text-[#FF0000]">English</span> teacher
                        online
                    </h1>
                    <p>
                        At italki, we offer a variety of experienced and certified English
                        teachers and tutors to help you achieve your language goals. Our
                        online platform allows you to choose from a wide range of English
                        classes, courses, and lessons to suit your learning needs and
                        schedule.
                    </p>
                </div>
                <div>
                    <Image
                        src={"/bg_logo.svg"}
                        width={230}
                        height={230}
                        objectFit="cover"
                        alt="Usama"
                    />
                </div>
            </div>
            {/* <div className="container flex flex-col flex-wrap">
                <div className="flex flex-col items-center max-w-3xl p-4 mx-auto bg-white rounded-lg md:flex-row md:p-6 shadow-xlh">
                    <div className="flex-shrink-0">
                        <Image
                            src="/usama3.jpg" // Replace with your image path
                            alt="Teacher"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex-1 mt-4 text-center md:mt-0 md:ml-4 md:text-left">
                        <div className="flex flex-col items-center gap-2 md:flex-row ">
                            <h2 className="text-lg font-semibold">Usama</h2>
                            <span className="mt-1 text-green-500 md:mt-0">&#x2714;</span>
                        </div>
                        <p className="text-sm text-gray-500">Professional Teacher</p>
                        <div className="flex items-center justify-center mt-2 md:justify-start">
                            <span className="text-yellow-400">&#9733;</span>
                            <span className="ml-1 text-sm font-semibold">5.0</span>
                            <span className="ml-2 text-sm text-gray-500">5,374 Lessons</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center mt-2 text-sm text-gray-600 md:justify-start">
                            <span className="font-semibold">SPEAKS :</span>
                            <span className="flex items-center ml-1">
                                <span className="ml-1">English</span>
                                <span className="ml-1">||||</span>
                            </span>
                            <span className="flex items-center ml-1">
                                <span className="ml-1">French</span>
                                <span className="px-1 ml-1 text-blue-800 bg-blue-100 rounded">
                                    Native
                                </span>
                            </span>
                            <span className="flex items-center ml-1">
                                <span className="ml-1">Spanish</span>
                                <span className="ml-1">||||</span>
                            </span>
                            <span className="flex items-center ml-1">
                                <span className="ml-1">Italian</span>
                                <span className="ml-1">|||</span>
                            </span>
                            <span className="ml-1">+3</span>
                        </div>
                        <p className="mt-2 text-sm text-center md:text-left">
                            Only taking new students for French and on weekdays. Thank you for
                            your comprehension :). I'm patient and supportive. I do know that
                            mistakes are part of the process and...
                        </p>
                        <div className="flex flex-col items-center justify-between mt-4 md:flex-row">
                            <span className="text-lg font-semibold">
                                USD 60.00 <span className="text-sm font-normal">/ trial</span>
                            </span>
                            <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded md:mt-0">
                                Book trial
                            </button>
                        </div>
                    </div>
                </div>

            </div> */}

            <div className="container flex flex-col flex-wrap">
                {experts &&
                    experts.map((expert, index) => (
                        <div className="flex flex-col items-center max-w-3xl p-4 mx-auto bg-white rounded-lg md:flex-row md:p-6 shadow-xlh">
                            <div className="flex-shrink-0">
                                <Image
                                    src={expert.image}// Replace with your image path
                                    alt="Teacher"
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex-1 mt-4 text-center md:mt-0 md:ml-4 md:text-left">
                                <div className="flex flex-col items-center gap-2 md:flex-row ">
                                    <h2 className="text-lg font-semibold">{expert?.username || "Not Available"}</h2>
                                    <span className="mt-1 text-green-500 md:mt-0">&#x2714;</span>
                                </div>
                                <p className="text-sm text-gray-500">{expert?.teacherType || "ProfessionalTeacher"}</p>
                                <div className="flex items-center justify-center mt-2 md:justify-start">
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="ml-1 text-sm font-semibold">5.0</span>
                                    <span className="ml-2 text-sm text-gray-500">5,374 Lessons</span>
                                </div>
                                <div className="flex flex-wrap items-center justify-center mt-2 text-sm text-gray-600 md:justify-start">
                                    <span className="font-semibold">SPEAKS :</span>
                                    <span className="flex items-center ml-1">
                                        <span className="ml-1">English</span>
                                        <span className="ml-1">||||</span>
                                    </span>
                                    <span className="flex items-center ml-1">
                                        <span className="ml-1">French</span>
                                        <span className="px-1 ml-1 text-blue-800 bg-blue-100 rounded">
                                            Native
                                        </span>
                                    </span>
                                    <span className="flex items-center ml-1">
                                        <span className="ml-1">Spanish</span>
                                        <span className="ml-1">||||</span>
                                    </span>
                                    <span className="flex items-center ml-1">
                                        <span className="ml-1">Italian</span>
                                        <span className="ml-1">|||</span>
                                    </span>
                                    <span className="ml-1">+3</span>
                                </div>
                                <p className="mt-2 text-sm text-center md:text-left">
                                    Only taking new students for French and on weekdays. Thank you for
                                    your comprehension :). I'm patient and supportive. I do know that
                                    mistakes are part of the process and...
                                </p>
                                <div className="flex flex-col items-center justify-between mt-4 md:flex-row">
                                    <span className="text-lg font-semibold">
                                        USD 60.00 <span className="text-sm font-normal">/ trial</span>
                                    </span>
                                    <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded md:mt-0">
                                        Book trial
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

        </>
    );
};

export default TeacherCard;