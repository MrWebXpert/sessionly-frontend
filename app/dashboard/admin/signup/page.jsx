"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import BaseButton from "@/components/forms/BaseButton";
import BaseInput from "@/components/forms/BaseInput";

const AuthPage = () => {
    const router = useRouter();
    const [isAnimated, setIsAnimated] = useState(false);
    const overlayBg = "bg-[#10b981]";

    const [signUp, setSignUp] = useState({
        username: "",
        email: "",
        password: "",
        userType: "",
        phone: ""
    });

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChangeSignUp = (e) => {
        const { name, value } = e.target;
        setSignUp((prev) => ({ ...prev, [name]: value }));
    };

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }));
    };

    const signUpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/register`, signUp);
            console.log(response);
            if (response) {
                toast.success("Admin Created Successfully");
                setSignUp({
                    username: "",
                    email: "",
                    password: "",
                    phone: ""
                });
                router.push("/dashboard");
            }
        } catch (error) {
            console.log("Error in signUp", error.message);
            toast.error("Invalid credentials");
        }
    };

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/login`, login);
            console.log(response);
            if (response) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userType", response.data.userType);
                localStorage.setItem("id", response.data.id);
                toast.success(`${response.data.userType} Login Successfully`);
                setLogin({
                    email: "",
                    password: ""
                });
                router.push("/dashboard");
            }
        } catch (error) {
            console.log("Error in login", error.message);
            toast.error("Invalid credentials");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
            <div className="relative w-4/5 overflow-hidden bg-white rounded-lg h-4/5">
                <div
                    id="signin"
                    className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${isAnimated ? "translate-x-full opacity-0" : ""}`}
                >
                    <div className="selection:bg-indigo-500 selection:text-white">
                        <div className="flex items-center justify-center">
                            <div className="flex-1">
                                <div className="mx-auto overflow-hidden">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-4xl font-bold text-[#10b981]">
                                            Welcome back!
                                        </h1>
                                        <form className="mt-12" onSubmit={loginSubmit}>
                                            <div className="relative">
                                                <BaseInput
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    onChange={handleChangeLogin}
                                                    value={login.email}
                                                    label="Email"
                                                    className="border-b-2 focus:outline-none"
                                                />
                                            </div>
                                            <div className="relative mt-10">
                                                <BaseInput
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={handleChangeLogin}
                                                    value={login.password}
                                                    label="Password"
                                                />
                                            </div>
                                            <div className="flex justify-center">
                                                <BaseButton type="submit" label="Sign in" />
                                            </div>
                                        </form>
                                        <button
                                            onClick={() => { router.push('/sendmail') }}
                                            className="block mt-4 text-sm font-medium text-center text-[#10b981] hover:underline focus:outline-none"
                                        >
                                            Forgot your password?
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="signup"
                    className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${isAnimated ? "translate-x-full opacity-100 z-50 animate-show" : "opacity-0 z-10"}`}
                >
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="selection:bg-indigo-500 selection:text-white">
                            <div className="flex items-center justify-center">
                                <div className="flex-1 p-8">
                                    <div className="mx-auto overflow-hidden">
                                        <div className="p-8">
                                            <h1 className="text-4xl font-bold text-[#10b981]">
                                                Create Account
                                            </h1>
                                            <form className="mt-12" onSubmit={signUpSubmit}>
                                                <div className="relative">
                                                    <BaseInput
                                                        name="username"
                                                        type="text"
                                                        placeholder="Name"
                                                        onChange={handleChangeSignUp}
                                                        value={signUp.username}
                                                        label="Name"
                                                    />
                                                </div>
                                                <div className="relative mt-10">
                                                    <BaseInput
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        onChange={handleChangeSignUp}
                                                        value={signUp.email}
                                                        label="Email"
                                                    />
                                                </div>
                                                <div className="relative mt-10">
                                                    <BaseInput
                                                        name="phone"
                                                        type="text"
                                                        placeholder="Phone Number"
                                                        onChange={handleChangeSignUp}
                                                        value={signUp.phone}
                                                        label="Phone Number"
                                                    />
                                                </div>
                                                <div className="relative mt-10">
                                                    <BaseInput
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        onChange={handleChangeSignUp}
                                                        value={signUp.password}
                                                        label="Password"
                                                    />
                                                </div>
                                                <div className="flex justify-center">
                                                    <BaseButton type="submit" label="Sign up" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="overlay-container"
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-100 ${isAnimated ? "-translate-x-full" : ""}`}
                >
                    <div
                        id="overlay"
                        className={`${overlayBg} relative -left-full h-full w-[200%] transform transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-1/2" : "translate-x-0"}`}
                    >
                        <div
                            id="overlay-left"
                            className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[0%] transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-0" : "-translate-x-[20%]"}`}
                        >
                            <div className="p-8 text-center">
                                <h1 className="mb-4 text-2xl font-bold text-white">
                                    Already have an account?
                                </h1>
                                <h5 className="text-xl text-white">
                                    Sign in with your email & password
                                </h5>
                                <div className="mt-16">
                                    <button
                                        className="px-6 py-2 text-xl text-center text-white uppercase transition-transform ease-in bg-transparent rounded-full ring-2 ring-white active:scale-110"
                                        onClick={() => setIsAnimated(!isAnimated)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            id="overlay-right"
                            className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-[20%]" : "translate-x-0"}`}
                        >
                            <div className="p-8 text-center">
                                <h1 className="mb-4 text-3xl font-bold text-white">
                                    Don't have an account?
                                </h1>
                                <h5 className="text-xl text-white">
                                    Start your journey in one click
                                </h5>
                                <div className="mt-16">
                                    <button
                                        className="px-6 py-2 text-center text-white uppercase transition-transform ease-in bg-transparent rounded-full ring-2 ring-white active:scale-110"
                                        onClick={() => setIsAnimated(!isAnimated)}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;