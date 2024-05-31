"use client"
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import BaseInput from '@/components/forms/BaseInput';
import BaseButton from '@/components/forms/BaseButton';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const { id, token } = useParams()
    const router = useRouter()
    // const [newPassword, setNewPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isAnimated, setIsAnimated] = useState(false)
    const [password, setPassword] = useState({
        newPassword: ""
    })
    const changeValue = (e) => {
        const { name, value } = e.target
        setPassword({ ...password, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        // if (newPassword !== confirmPassword) {
        //     setMessage('Passwords do not match');
        //     return;
        // }
        const data = {
            newPassword: password.newPassword
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/resetpassword/${id}/${token}`, data);
            toast.success('reset successfully')
            router.push("/signin")
        } catch (error) {
            toast.error("failed to reset")
            console.log("error in remove", error)

        }
    };
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
                                <div className="mx-auto overflow-hidden">
                                    <div>
                                        <Image
                                            className="mx-auto animate-float"
                                            src="/forget.gif"
                                            width={300}
                                            height={300}
                                        />
                                        <h1 className="text-4xl font-bold text-[#10b981]">
                                            Forgot Password!
                                        </h1>
                                        <form
                                            className="mt-12"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="relative">
                                                <div className="relative mt-10">
                                                    <BaseInput
                                                        name="newPassword"
                                                        type="password"
                                                        placeholder="password"
                                                        onChange={changeValue}
                                                        value={password.newPassword}
                                                        label="password"
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="relative mt-10">
                                                <div className="relative mt-10">
                                                    <BaseInput
                                                        // id="password"
                                                        name="password"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        // onChange={handleChangeLogin}
                                                        // value={loginData.password}
                                                        label="Confirm Password"
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="flex justify-center">
                                                <BaseButton type="submit" label="Confirm Password" />
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

};

export default ResetPassword;