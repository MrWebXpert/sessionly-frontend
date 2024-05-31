"use client"
import BaseButton from '@/components/forms/BaseButton'
import BaseInput from '@/components/forms/BaseInput'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [isAnimated, setIsAnimated] = useState(false);

    const [formaData, setFormData] = useState({
        email: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formaData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/sendemail`, formaData)
            console.log(response)
            toast.success("Email sent Successfully! Please Check Your Email")
            setFormData({
                email: ""
            })
            router.push("/signin")
        } catch (error) {
            console.log(error)
            toast.error('Email not found please enter valid email')
        }
    }
    console.log(formaData)


    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
            <div className="relative w-4/5  overflow-hidden  rounded-lg h-[85%]">
                <div
                    id="signin"
                    className={` absolute top-0 left-80 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${isAnimated ? "translate-x-full opacity-0" : ""
                        }`}
                >
                    <div className="selection:bg-indigo-500 selection:text-white">
                        <div className="flex items-center justify-center">
                            <div className="flex-1">
                                <div className="mx-auto overflow-hidden" onSubmit={handleSubmit}>
                                    <div>
                                        <Image
                                            className="mx-auto animate-float"
                                            src="/forget-email.gif"
                                            unoptimized
                                            width={300}
                                            height={300}
                                        />
                                        <h1 className="text-4xl font-bold text-[#10b981]">
                                            Forgot Password!
                                        </h1>
                                        <form
                                            className="mt-12"
                                        // onSubmit={handleSubmitLogin}
                                        >
                                            <div className="relative">
                                                <div className="relative mt-10">
                                                    <BaseInput
                                                        // id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        onChange={handleChange}
                                                        value={FormData.email}
                                                        label="email"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex justify-center">
                                                <BaseButton type="submit" label=" Send email" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page