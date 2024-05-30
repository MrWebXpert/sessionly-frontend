'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Page = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        requirements: '',
        preRequirements: '',
        admin: '',
        staff: '',
        students: '',
        duration: '',
        startDate: '',
        endDate: '',
        isActive: '',
        lastDateOfEnrollment: '',
        image: '',
        calendar: ''
    });

    useEffect(() => {
        const adminId = localStorage.getItem("adminId");
        setFormData((prevData) => ({ ...prevData, admin: adminId }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/course/register/${formData.admin}`, formData);
            console.log(res.data);
            toast.success("Course Created Successfully");
            router.push('/dashboard/course');
        } catch (err) {
            console.log(err);
            toast.error("Error creating course");
        }
    };

    return (
        <div className="flex flex-col justify-center w-full p-6 bg-gray-100 align-center">
            <h1 className="p-4 font-bold bg-white">Add New Courses</h1>
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-center w-10/12 gap-5 mx-auto my-6 align-center">
                <div className="w-1/3 mb-6">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="title">
                        Course Name
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="title"
                        type="text"
                        placeholder="Enter Course Name"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-1/3 mb-6">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="price"
                        type="text"
                        placeholder="Enter Price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-1/3 mb-6">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="requirements">
                        Requirements
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="requirements"
                        type="text"
                        placeholder="Enter Requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-1/3 mb-6">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="preRequirements">
                        Pre-Requirements
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="preRequirements"
                        type="text"
                        placeholder="Enter Pre-Requirements"
                        name="preRequirements"
                        value={formData.preRequirements}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-1/3 mb-6">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="startDate">
                        Start Date
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="startDate"
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-1/3 mb-6">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="endDate">
                        End Date
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="endDate"
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-1/3 mb-6">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="duration">
                        Course Duration
                    </label>
                    <div className="mt-2">
                        <select
                            id="duration"
                            name="duration"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                            value={formData.duration}
                            onChange={handleChange}
                        >
                            <option value="">Select Duration</option>
                            <option value="30">30 days</option>
                            <option value="1 year">1 year</option>
                            <option value="4 year">4 years</option>
                        </select>
                    </div>
                </div>
                <div className="w-1/3 mb-6">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="lastDateOfEnrollment">
                        Last Date of Enrollment
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="lastDateOfEnrollment"
                        type="date"
                        name="lastDateOfEnrollment"
                        value={formData.lastDateOfEnrollment}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6 w-[69%]">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="calendar">
                        Calendar
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="calendar"
                        type="date"
                        name="calendar"
                        value={formData.calendar}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6 w-[69%]">
                    <label className="block mb-1 font-bold text-gray-500" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="description"
                        name="description"
                        placeholder="Enter Course Description"
                        rows={10}
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-end w-full mx-auto">
                    <button
                        type="submit"
                        className="bg-[#10b981] text-white font-bold py-2 px-3 mt-1 border border-[#10b981] rounded"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;
