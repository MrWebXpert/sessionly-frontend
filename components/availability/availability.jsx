"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const AvailabilityForm = () => {
    const [availability, setAvailability] = useState([]);
    const [expertId, setExpertId] = useState("");

    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== "undefined") {
            const storedExpertId = localStorage.getItem("id");
            if (storedExpertId) {
                setExpertId(storedExpertId);
            }
        }
    }, []);

    const handleAddAvailability = () => {
        setAvailability([...availability, { day: "", startTime: "", endTime: "" }]);
    };

    const handleChange = (index, field, value) => {
        const newAvailability = [...availability];
        newAvailability[index][field] = value;
        setAvailability(newAvailability);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/addavailability`,
                {
                    expertId,
                    availability,
                }
            );
            console.log(response);
            toast.success("Availability updated successfully");
        } catch (error) {
            toast.error("Error updating availability");
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            {availability.map((slot, index) => (
                <div
                    key={index}
                    className="flex items-center space-x-4 availability-slot "
                >
                    <select
                        value={slot.day}
                        onChange={(e) => handleChange(index, "day", e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Day</option>
                        {daysOfWeek.map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                    <input
                        type="time"
                        value={slot.startTime}
                        onChange={(e) => handleChange(index, "startTime", e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="time"
                        value={slot.endTime}
                        onChange={(e) => handleChange(index, "endTime", e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>
            ))}
            <button
                type="button"
                onClick={handleAddAvailability}
                className="px-4 py-2 mr-4 text-white bg-blue-500 rounded"
            >
                Add Availability
            </button>
            <button
                type="submit"
                className="px-4 py-2 text-white bg-green-500 rounded"
            >
                Save Availability
            </button>
        </form>
    );
};

export default AvailabilityForm;