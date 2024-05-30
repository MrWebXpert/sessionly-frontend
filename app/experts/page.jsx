"use client"
import SignupModal from "@/components/SignupModal";
import Head from "next/head";
import { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { GiGraduateCap } from "react-icons/gi";
import { MdOndemandVideo } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";



export default function ExpertSignUp() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <Head>
                <title>Application</title>
            </Head>
            <main className="container flex-grow px-4 py-12 mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">Before starting</h1>
                <div className="flex justify-center">
                    <p className="w-4/5 mb-8 text-center">
                        Check the following information. We recommend that you read
                        everything in detail. Once you have all the answers and material you
                        need, you can start your application.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 mx-20 md:grid-cols-2">
                    <div className="flex flex-col items-center justify-center px-4 py-6 bg-white rounded-lg shadow">
                        <FcTodoList className="mb-3 text-6xl text-tomato" />
                        <h2 className="mb-4 text-xl font-bold text-center">
                            Is your language open?
                        </h2>
                        <p className="w-3/4 mb-4 text-center">
                            Before applying, check if your teaching language is open for
                            application.
                        </p>
                        <button className="px-4 py-2 text-black border border-2 rounded">
                            CHECK THE LIST
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-6 bg-white rounded-lg shadow">
                        <GiGraduateCap className="mb-3 text-6xl text-blue-500" />
                        <h2 className="mb-4 text-xl font-bold text-center">
                            What type of teacher are you?
                        </h2>
                        <p className="w-3/4 mb-4 text-center">
                            On italki you can become a Professional Teacher or a Community
                            Tutor. Discover a solution that suits you.
                        </p>
                        <button className="px-4 py-2 text-black border border-2 rounded">
                            LEARN MORE
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-6 bg-white rounded-lg shadow">
                        <MdOndemandVideo className="mb-3 text-6xl text-blue-500" />
                        <h2 className="mb-4 text-xl font-bold text-center">
                            Prepare a video introduction
                        </h2>
                        <p className="w-3/4 mb-4 text-center">
                            italki requires that you have a video introduction. This video
                            introduction is how you can show off your teaching style and
                            teaching personality to potential students. Video example
                        </p>
                        <button className="px-4 py-2 text-black border border-2 rounded">
                            VIDEO RULES
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-6 bg-white rounded-lg shadow">
                        <PiCertificateBold className="mb-3 text-6xl text-blue-500" />
                        <h2 className="mb-4 text-xl font-bold text-center">
                            Teaching certifications
                        </h2>
                        <p className="w-3/4 mb-4 text-center">
                            italki requires only Professional Teachers to upload their
                            Teaching certificates. Your diplomas and certificates are not
                            published.
                        </p>
                        <button className="px-4 py-2 text-black border border-2 rounded">
                            LEARN MORE
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button className="px-4 py-3 bg-[#FF7568] hover:bg-[#c44e43] transition-all rounded-md text-white" onClick={openModal}>START YOUR APPLICATION</button>
                </div>
                <SignupModal isOpen={isModalOpen} onClose={closeModal} />
            </main>
        </div>
    );
}