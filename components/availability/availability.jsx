"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const AvailabilityForm = () => {
    const [availability, setAvailability] = useState([]);
    const [expertId, setExpertId] = useState('');

    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== "undefined") {
            const storedExpertId = localStorage.getItem('id');
            if (storedExpertId) {
                setExpertId(storedExpertId);
            }
        }
    }, []);

    const handleAddAvailability = () => {
        setAvailability([...availability, { day: '', startTime: '', endTime: '' }]);
    };

    const handleChange = (index, field, value) => {
        const newAvailability = [...availability];
        newAvailability[index][field] = value;
        setAvailability(newAvailability);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/addavailability`, {
                expertId,
                availability
            });
            console.log(response);
            toast.success('Availability updated successfully');
        } catch (error) {
            toast.error('Error updating availability');
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {availability.map((slot, index) => (
                <div key={index} className="availability-slot">
                    <select value={slot.day} onChange={(e) => handleChange(index, 'day', e.target.value)}>
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
                        onChange={(e) => handleChange(index, 'startTime', e.target.value)}
                    />
                    <input
                        type="time"
                        value={slot.endTime}
                        onChange={(e) => handleChange(index, 'endTime', e.target.value)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddAvailability}>
                Add Availability
            </button>
            <button type="submit">Save Availability</button>
        </form>
    );
};

export default AvailabilityForm;
