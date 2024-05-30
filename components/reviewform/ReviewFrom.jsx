import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ReviewForm = ({ courseId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if localStorage is available
        const studentId = typeof window !== 'undefined' ? localStorage.getItem('studentId') : null;

        if (!studentId) {
            toast.error('Student not logged in');
            return;
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/courses/${courseId}/reviews`, {
                studentId,
                rating,
                comment
            });
            toast.success('Review added successfully');
        } catch (error) {
            toast.error('Error adding review');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Rating: </label>
                <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                    <option value="" disabled>Select Rating</option>
                    {[1, 2, 3, 4, 5].map(value => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Comment: </label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
            </div>
            <button type="submit" className='px-4 py-3 border'>Submit Review</button>
        </form>
    );
};

export default ReviewForm;
