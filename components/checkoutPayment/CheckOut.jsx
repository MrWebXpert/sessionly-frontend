"use client";
import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";

const CheckOut = ({ amount }) => {
    const router = useRouter()
    const { courseId } = useParams();
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [studentId, setStudentId] = useState(null);
    const [coursePrice, setCoursePrice] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedStudentId = localStorage.getItem('id');
            setStudentId(storedStudentId);
        }
    }, []);

    useEffect(() => {
        const courseID = localStorage.getItem("courseId")
        const courseFetching = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/course/get/${courseID}`)
            setCoursePrice(response.data.verifyCourse.sessionPrice);
        }
        courseFetching()

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (!stripe || !elements) {
            setLoading(false);
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/course/payment/${courseId}`, { amount: coursePrice });

            const { clientSecret } = response.data; // Ensure this is correctly destructuring the client_secret

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: "Jenny Rosen",
                    },
                },
            });

            if (error) {
                setError(error.message);
                setLoading(false);
            } else if (paymentIntent.status === "succeeded") {
                console.log("Payment succeeded:", paymentIntent);
                setLoading(false);
                try {
                    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/booking/register`, {
                        student: studentId,
                        course: courseId
                    });
                    toast.success("Course booked successfully");
                    router.push('/dashboard/student/bookings')
                } catch (error) {
                    console.log(error.message);
                    toast.error("Please login first");
                }
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center">Payment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="p-3 border border-gray-300 rounded">
                        <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <button
                        type="submit"
                        disabled={!stripe || loading}
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        {loading ? "Processing..." : "Pay"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
