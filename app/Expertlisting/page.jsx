"use client";
// Expertlisting.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Expertlisting() {
    const router = useRouter();
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

    const formatAvailability = (availability) => {
        if (!availability || typeof availability !== 'object') return "Not Available";

        const { day, startTime, endTime } = availability;
        const formatTime = (time) => {
            const date = new Date(time);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };

        return `${day}: ${formatTime(startTime)} - ${formatTime(endTime)}`;
    };

    return (
        <div className="py-20 bg-gray-200">
            <div>
                <h1 className="my-8 font-sans text-2xl font-bold text-center">
                    Our Top Experts
                </h1>
            </div>
            <div className="overflow-x-auto">
                <div className="flex flex-nowrap items-center w-[80%] mx-auto rounded-md">
                    {experts &&
                        experts.map((expert, index) => (
                            <div
                                onClick={() => {
                                    router.push(`/Expertlisting/${expert._id}`);
                                }}
                                className="w-4/5 px-2 pb-4 rounded-md shrink-0 md:px-3 md:pb-6 rounded-3 md:w-1/3"
                                key={expert._id}
                            >
                                <div className="style_asgardShadow__PT896 rounded-3">
                                    <div className="relative bg-white rounded-t-3">
                                        <div className="overflow-hidden rounded-t-3">
                                            <div className="video-player" style={{ width: "100%", height: "202px" }}>
                                                <div className="relative flex items-center w-full h-full overflow-hidden">
                                                    <video
                                                        src={expert.introductionVideo}
                                                        poster={expert.image}
                                                        controls
                                                        // autoPlay
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute text-right text-white right-3 bottom-3">
                                            <div className="flex items-center justify-end text-warning">
                                                <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" fill="#ffc400">
                                                    <path d="M11.315 3.639a.8.8 0 011.37 0l2.596 4.314a.8.8 0 00.505.366l4.905 1.136a.8.8 0 01.424 1.304l-3.3 3.802a.8.8 0 00-.193.594l.435 5.015a.8.8 0 01-1.11.806l-4.635-1.964a.8.8 0 00-.624 0l-4.636 1.964a.8.8 0 01-1.109-.806l.435-5.015a.8.8 0 00-.192-.594l-3.3-3.802a.8.8 0 01.423-1.304L8.214 8.32a.8.8 0 00.505-.366z"></path>
                                                </svg>
                                                <span className="ml-1">RATING</span>
                                            </div>
                                            <p className="text-sm font-medium leading-6">Lessons</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-4 pt-4 pb-3 bg-white cursor-pointer rounded-b-3">
                                        <div className="flex justify-between">
                                            <div className="flex flex-col overflow-hidden">
                                                <p className="text-xl font-semibold leading-5 text-black">{expert?.username}</p>
                                                <p className="mt-2 text-sm text-gray-500">Teacher Type: {expert?.teacherType || "Not Available"}</p>
                                            </div>
                                            <div>
                                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#313140" className="rtl:rotate-180">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M9.72 16.28a.75.75 0 010-1.06l2.97-2.97-2.97-2.97a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z"
                                                        fillRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between w-full h-5 mt-2 overflow-hidden gap-x-2">
                                            <div className="flex flex-1 overflow-hidden gap-x-4 shrink-0">
                                                <div className="flex shrink-0">
                                                    <span className="mr-1 text-gray-500">
                                                        Language of Expertise: {expert?.languageofExpertise || "Not Available"}
                                                    </span>
                                                    <div className="self-center" style={{ height: "10px" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p className="mb-2 leading-4 text-gray-500 font-sm">
                                                Session start from: {formatAvailability(expert?.availability.startTime || "Not Available")}
                                            </p>
                                            <p className="text-base font-semibold text-gray-500">USD: {expert?.sessionPrice || 20}$</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 text-right text-white right-3">
                                    <div className="flex items-center justify-end text-warning">
                                        <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" fill="#ffc400">
                                            <path d="M11.315 3.639a.8.8 0 011.37 0l2.596 4.314a.8.8 0 00.505.366l4.905 1.136a.8.8 0 01.424 1.304l-3.3 3.802a.8.8 0 00-.193.594l.435 5.015a.8.8 0 01-1.11.806l-4.635-1.964a.8.8 0 00-.624 0l-4.636 1.964a.8.8 0 01-1.109-.806l.435-5.015a.8.8 0 00-.192-.594l-3.3-3.802a.8.8 0 01.423-1.304L8.214 8.32a.8.8 0 00.505-.366z"></path>
                                        </svg>
                                        <span className="ml-1">RATING</span>
                                    </div>
                                    <p className="text-sm font-medium leading-6">Lessons</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Expertlisting;
