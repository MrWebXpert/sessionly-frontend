"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const ExpertDetails = () => {
    const [teacherType, setTeacherType] = useState("");
    const [language, setLanguage] = useState("");
    const [video, setVideo] = useState(null);
    const [certificates, setCertificates] = useState(null);
    const [staffId, setStaffId] = useState("");
    const [expertSignupData, setExpertSignupData] = useState({});
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleTeacherTypeChange = (e) => {
        setTeacherType(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleVideoChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleCertificatesChange = (e) => {
        setCertificates(e.target.files[0]);
    };

    useEffect(() => {
        const expertId = localStorage.getItem("expertId");
        setStaffId(expertId);

        const fetchingExpertSignupData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/get/${expertId}`
                );
                setExpertSignupData(response.data.verifyStaff);
            } catch (error) {
                setError(error.message);
            }
        };
        if (expertId) {
            fetchingExpertSignupData();
        }
    }, []);

    const handleAddExpertDetails = async (e) => {
        e.preventDefault();

        if (!video || !certificates) {
            setError("Please upload video and certificates");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("video", video);
            formData.append("certificates", certificates);

            formData.append("username", expertSignupData.username);
            formData.append("email", expertSignupData.email);
            formData.append("password", expertSignupData.password);
            formData.append("teacherType", teacherType);
            formData.append("language", language);

            const response = await axios.patch(
                ` ${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/update/${staffId}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(response);
            router.push("/dashboard");
        } catch (error) {
            setError(error.message);
        }
    };

    const languages = [
        { value: "English", label: "English" },
        { value: "Urdu", label: "Urdu" },
        { value: "Arabic", label: "Arabic" },
    ];

    return (
        <div className="h-screen bg-gray-100">
            <div className="container mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md h-screen">
                <h1 className="text-3xl font-bold mb-4 text-center">Expert Profile</h1>
                <form className="max-w-lg mx-auto mt-10">
                    <div className="mb-4">
                        <label
                            htmlFor="teacherType"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Teacher Type
                        </label>
                        <select
                            id="teacherType"
                            value={teacherType}
                            onChange={handleTeacherTypeChange}
                            className="block w-full p-2 pl-10 text-sm text-gray-700 border outline-none cursor-pointer"
                        >
                            <option value="" disabled>
                                Select
                            </option>
                            <option value="Professional Teacher">Professional Teacher</option>
                            <option value="Community Tutor">Community Tutor</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="language"
                            className="block text-sm font-medium text-gray-700 "
                        >
                            Language of Expertise
                        </label>
                        <select
                            id="language"
                            value={language}
                            onChange={handleLanguageChange}
                            className="block w-full p-2 pl-10 text-sm text-gray-700 border outline-none cursor-pointer"
                        >
                            <option value="" disabled>
                                Select
                            </option>
                            {languages.map((language) => (
                                <option value={language.value} key={language.value}>
                                    {language.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="video"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Introduction Video
                        </label>
                        <input
                            type="file"
                            id="video"
                            accept="video/*"
                            onChange={handleVideoChange}
                            className="block w-full p-2 text-sm text-gray-700 border outline-none cursor-pointer"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="certificates"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Upload Certificates
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id="certificates"
                            onChange={handleCertificatesChange}
                            className="block w-full p-2 text-sm text-gray-700 border outline-none cursor-pointer"
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleAddExpertDetails}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExpertDetails