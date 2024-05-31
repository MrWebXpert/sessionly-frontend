import Image from "next/image";
import React, { useState, useEffect } from "react";

const testimonials = [
    {
        image: "/4.jpeg",
        text: "I have been a client of Salford & Co. Company for over three years now, and I cannot recommend them highly enough. Their level of professionalism and attention to detail is outstanding. Every interaction I have had with their team has been pleasant and efficient. I am grateful to have found such a reliable and trustworthy company to handle my needs.",
        name: "Francois Mercer",
        handle: "@reallygreatsite",
    },
    {
        image: "/logo.png",
        text: "Working with Salford & Co. has been a game-changer for our business. Their insights and strategies have led to significant improvements in our operations. The team's expertise is unparalleled.",
        name: "Alex Johnson",
        handle: "@amazingbiz",
    },
    {
        image: "/quiz.jpg",
        text: "Salford & Co. provided exceptional service and support throughout our project. Their dedication to client satisfaction is evident in everything they do. We couldn't be happier with the results.",
        name: "Emily Carter",
        handle: "@happyclient",
    },
];

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-gray-100 w-full h-[70vh] flex justify-center items-center">
            <div className="bg-blue-500 w-full h-[60vh] absolute top-0 bg-clip-path"></div>
            <div>
                <div className="relative w-full max-w-2xl">
                    <div className="flex justify-center">
                        <div className="relative z-20 w-40 h-40 overflow-hidden border-4 border-blue-500 rounded-full -top-1">
                            <Image
                                src={testimonials[currentTestimonial].image}
                                alt="Client"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg mx-4 p-8 shadow-lg relative top-[-80px]">
                        <div className="flex justify-between text-blue-500 text-9xl">
                            <p>“</p>
                            <p>”</p>
                        </div>
                        <p className="mb-6 -mt-8 text-gray-700">
                            {testimonials[currentTestimonial].text}
                        </p>
                        <div className="text-center">
                            <p className="text-lg font-bold">
                                {testimonials[currentTestimonial].name}
                            </p>
                            <p className="text-gray-500">
                                {testimonials[currentTestimonial].handle}
                            </p>
                            <div className="flex justify-center mt-4">
                                <span className="text-yellow-500">★</span>
                                <span className="text-yellow-500">★</span>
                                <span className="text-yellow-500">★</span>
                                <span className="text-yellow-500">★</span>
                                <span className="text-yellow-500">★</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;