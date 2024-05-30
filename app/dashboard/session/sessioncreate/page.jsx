"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
    const [mainCategory, setMainCategory] = useState("");
    const [subCategories, setSubCategories] = useState([]);
    const [expertId, setExpertId] = useState("");

    useEffect(() => {
        const ExpertId = localStorage.getItem("id");
        setExpertId(ExpertId || "");
    }, []);

    const categories = {
        fruits: ["Apple", "Banana", "Orange"],
        vegetables: ["Carrot", "Lettuce", "Spinach"],
    };

    const handleMainCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setMainCategory(selectedCategory);
        setSubCategories(categories[selectedCategory] || []);
        setFormData((prevFormData) => ({
            ...prevFormData,
            category: selectedCategory,
            subCategory: "",
        }));
    };

    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        duration: "",
        sessionPrice: "",
        category: "",
        subCategory: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createSession = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/course/register/${expertId}`,
                formData
            );
            console.log(response);

            if (response) {
                toast.success("Session Created Successfully");
                router.push("/dashboard/session");
            }
        } catch (error) {
            console.log("Error While creating Expert", error.message);
            toast.error("Error while creating Session");
        }
    };

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="p-4 font-bold bg-white">Add Session</h1>

            <form
                onSubmit={createSession}
                className="flex flex-wrap justify-center my-6 gap-x-4"
            >
                <div className="w-1/2 mb-6">
                    <label
                        className="block mb-1 font-bold text-gray-500"
                        htmlFor="inline-full-name"
                    >
                        Expert Name
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="inline-full-name"
                        type="text"
                        placeholder="Enter Seesion Title Here"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-1/2 mb-6">
                    <label
                        htmlFor="main-category"
                        className="block mb-1 font-bold text-gray-500"
                    >
                        Main Category:
                    </label>
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="main-category"
                        name="category"
                        value={mainCategory}
                        onChange={handleMainCategoryChange}
                    >
                        <option value="">Select a category</option>
                        {Object.keys(categories).map((category) => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-1/2 mb-6">
                    <label
                        htmlFor="sub-category"
                        className="block mb-1 font-bold text-gray-500"
                    >
                        Sub Category:
                    </label>
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="sub-category"
                        name="subCategory"
                        required
                        value={formData.subCategory}
                        onChange={handleChange}
                        disabled={!mainCategory}
                    >
                        <option value="">Select a sub-category</option>
                        {subCategories.map((subCategory) => (
                            <option key={subCategory} value={subCategory.toLowerCase()}>
                                {subCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-1/2 mb-6">
                    <label
                        className="block mb-1 font-bold text-gray-500"
                        htmlFor="inline-full-name"
                    >
                        Duration
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="inline-full-name"
                        type="text"
                        placeholder="Enter Duration"
                        name="duration"
                        required
                        value={formData.duration}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-1/2 mb-6">
                    <label
                        className="block mb-1 font-bold text-gray-500"
                        htmlFor="inline-full-name"
                    >
                        Price
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                        id="inline-full-name"
                        type="number"
                        placeholder="Enter Price"
                        name="sessionPrice"
                        required
                        value={formData.sessionPrice}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex justify-end w-full mx-auto">
                    <button className="bg-[#10b981] text-white font-bold py-2 px-3 mt-3 border border-[#10b981] rounded">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;