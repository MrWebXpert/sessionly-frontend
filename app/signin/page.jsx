"use client";
import BaseButton from "@/components/forms/BaseButton";
import BaseInput from "@/components/forms/BaseInput";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SignupForm = () => {
    const router = useRouter();
    const [isAnimated, setIsAnimated] = useState(false);


    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });


    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/login`,
                loginData
            );

            console.log(response);
            if (response) {
                localStorage.setItem("userType", response.data.userType);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("id", response.data.id);
                localStorage.setItem("profile", response.data.profile);
                localStorage.setItem("email", response.data.email);
                // router.push("/dashboard");
                router.push(`/dashboard/${response.data.userType}`)

                toast.success("You logged In");

            }
        } catch (error) {
            console.error("Error Registering Staff", error.message);
            toast.error("invaild credentials");
        }
    };



    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
            <div className="relative w-4/5 overflow-hidden rounded-lg h-4/5">
                <div
                    id="signin"
                    className={` absolute top-4 left-80 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${isAnimated ? "translate-x-full opacity-0" : ""
                        }`}
                >
                    <div className="selection:bg-indigo-500 selection:text-white">
                        <div className="flex items-center justify-center">
                            <div className="flex-1">
                                <div className="mx-auto overflow-hidden">
                                    <div>
                                        <Image
                                            className="mx-auto animate-float"
                                            src="/hero-image.png"
                                            width={300}
                                            height={300}
                                        />
                                        <h1 className="text-4xl font-bold text-[#10b981]">
                                            Welcome back!
                                        </h1>
                                        <form className="mt-10" onSubmit={handleSubmitLogin}>
                                            <div className="relative">
                                                <div className="relative mt-10">
                                                    <BaseInput
                                                        // id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        onChange={handleChangeLogin}
                                                        value={loginData.email}
                                                        label="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="relative mt-10">
                                                <div className="relative mt-10">
                                                    <BaseInput
                                                        // id="password"
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        onChange={handleChangeLogin}
                                                        value={loginData.password}
                                                        label="Password"
                                                    />
                                                </div>
                                            </div>
                                            <a
                                                href="/sendmail"
                                                className="block text-sm font-medium text-center text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                                                Forgot your password?
                                            </a>

                                            <div className="flex justify-center">
                                                <BaseButton type="submit" label="Sign in" />
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

export default SignupForm