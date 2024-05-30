import React from "react";
import Image from "next/image";
function HoItWork() {
    return (
        <div>
            <div>
                <h1 className="my-8 font-sans text-2xl font-bold text-center ">
                    Why italki ?
                </h1>
                <div className="flex items-center justify-center Box">
                    <div className="box shadow-lg rounded-xl border-b-2 border-orange-500 mx-4 w-[250px]">
                        <Image
                            className="mx-auto my-2 border-b-2 border-black rounded-md"
                            src="/Learning.gif"
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="">
                            <h1 className="px-8 pb-2 font-sans text-xl font-semibold">
                                Customized Learnig
                            </h1>
                            <p className="w-4 h-[1.5px] ml-8 mb-[3px] bg-black">-</p>
                            <p className="font-sans text-lg pl-7">
                                Choose from over 15,000 teachers for 1-on-1 lessons baseded on
                                your goals and intrests
                            </p>
                        </div>
                    </div>
                    <div className="box shadow-lg border-b-2 rounded-xl border-orange-500 mx-4 w-[250px]">
                        <Image
                            className="mx-auto my-2 border-b-2 border-black rounded-md"
                            src="/Mobile payments.gif"
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="">
                            <h1 className="px-8 pb-2 font-sans text-xl font-semibold ">
                                Pay Per Lesson
                            </h1>
                            <p className="w-4 h-[1.5px] ml-8 mb-[3px] bg-black">-</p>
                            <p className="mb-6 font-sans text-lg pl-7">
                                On italki you only pay per lesson and at the price that meets
                                your budget
                            </p>
                        </div>
                    </div>
                    <div className="box shadow-lg border-b-2 rounded-xl border-orange-500 mx-4 w-[250px]">
                        <Image
                            src="/Lateness.gif"
                            className="mx-auto my-2 border-b-2 border-black rounded-md"
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="">
                            <h1 className="px-8 pb-2 font-sans text-xl font-semibold">
                                Anytime,Anywhere
                            </h1>
                            <p className="w-4 h-[1.5px] ml-8 mb-[3px] bg-black">-</p>
                            <p className="mb-12 font-sans text-lg pl-7">
                                Take online lesson at the time and place that suits you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="my-8 font-sans text-2xl font-bold text-center">
                    How it is work ?
                </h1>
                <div className="Box">
                    <div className="flex flex-wrap items-center justify-center my-5 box ">
                        <div className="mr-5 svg">
                            <Image
                                src="/Teacher student.gif"
                                width={300}
                                height={300}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="Text">
                            <p className="font-sans text-lg">
                                <span className="font-sans text-xl font-semibold">1 .</span>{" "}
                                Choose Your Teacher
                            </p>
                            <p className="font-sans text-lg ">
                                Watch teacher introduction videos and <br /> read reviews from
                                students
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center my-5 box">
                        <div className="Text">
                            <p className="font-sans text-lg">
                                <span className="font-sans text-xl font-semibold">2 .</span>{" "}
                                Books Your Lesson
                            </p>
                            <p className="font-sans text-lg">
                                Only schedule lessons at a time and date
                                <br /> that suit you
                            </p>
                        </div>
                        <div className="ml-5 svg">
                            <Image
                                src="/Cohort analysis.gif"
                                width={300}
                                height={300}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center my-5 box">
                        <div className="mr-5 svg">
                            <Image
                                src="/Telecommuting.gif"
                                width={300}
                                height={300}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="Text">
                            <p className="font-sans text-lg">
                                <span className="font-sans text-xl font-semibold">3 .</span>{" "}
                                Start Your Journey
                            </p>
                            <p className="font-sans text-lg">
                                Connect with your teacher via video chat
                                <br /> software, and let the learning begain
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HoItWork;
