"use client"
import Head from "next/head";
import { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { GiGraduateCap } from "react-icons/gi";
import { MdOndemandVideo } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import SignupModal from "./SignupModal";



export default function ExpertSignUp() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <Head>
                <title>Application</title>
            </Head>
            <main className="flex-grow container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Before starting</h1>
                <div className="flex justify-center">
                    <p className="text-center mb-8 w-4/5">
                        Check the following information. We recommend that you read
                        everything in detail. Once you have all the answers and material you
                        need, you can start your application.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-20">
                    <div className="bg-white px-4 py-6 rounded-lg shadow flex justify-center items-center flex-col">
                        <FcTodoList className="text-6xl mb-3 text-tomato" />
                        <h2 className="text-xl font-bold mb-4 text-center">
                            Is your language open?
                        </h2>
                        <p className="mb-4 w-3/4 text-center">
                            Before applying, check if your teaching language is open for
                            application.
                        </p>
                        <button className="text-black px-4 py-2 rounded border border-2">
                            CHECK THE LIST
                        </button>
                    </div>
                    <div className="bg-white px-4 py-6 rounded-lg shadow flex justify-center items-center flex-col">
                        <GiGraduateCap className="text-6xl mb-3 text-blue-500" />
                        <h2 className="text-xl font-bold mb-4 text-center">
                            What type of teacher are you?
                        </h2>
                        <p className="mb-4 w-3/4 text-center">
                            On italki you can become a Professional Teacher or a Community
                            Tutor. Discover a solution that suits you.
                        </p>
                        <button className="text-black px-4 py-2 rounded border border-2">
                            LEARN MORE
                        </button>
                    </div>
                    <div className="bg-white px-4 py-6 rounded-lg shadow flex justify-center items-center flex-col">
                        <MdOndemandVideo className="text-6xl mb-3 text-blue-500" />
                        <h2 className="text-xl font-bold mb-4 text-center">
                            Prepare a video introduction
                        </h2>
                        <p className="mb-4 w-3/4 text-center">
                            italki requires that you have a video introduction. This video
                            introduction is how you can show off your teaching style and
                            teaching personality to potential students. Video example
                        </p>
                        <button className="text-black px-4 py-2 rounded border border-2">
                            VIDEO RULES
                        </button>
                    </div>
                    <div className="bg-white px-4 py-6 rounded-lg shadow flex justify-center items-center flex-col">
                        <PiCertificateBold className="text-6xl mb-3 text-blue-500" />
                        <h2 className="text-xl font-bold mb-4 text-center">
                            Teaching certifications
                        </h2>
                        <p className="mb-4 w-3/4 text-center">
                            italki requires only Professional Teachers to upload their
                            Teaching certificates. Your diplomas and certificates are not
                            published.
                        </p>
                        <button className="text-black px-4 py-2 rounded border border-2">
                            LEARN MORE
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <button className="px-4 py-3 bg-[#FF7568] hover:bg-[#c44e43] transition-all rounded-md text-white" onClick={openModal}>START YOUR APPLICATION</button>
                </div>
                <SignupModal isOpen={isModalOpen} onClose={closeModal} />
            </main>
        </div>
    );
}