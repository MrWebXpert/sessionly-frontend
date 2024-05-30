"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="text-gray-600 body-font">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                    <a className="mr-5 hover:text-gray-900">Home </a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    <div className="relative">
                        <button
                            className="block w-10 h-10 text-gray-600 bg-gray-200 rounded-full focus:outline-none focus:bg-gray-300"
                            onClick={toggleMenu}
                        >
                            {/* Icon for the dropdown button (e.g., a downward arrow) */}
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 z-10 w-48 mt-2 bg-white rounded-lg shadow-lg">
                                <ul>

                                    <li>
                                        <Link
                                            href="/signup/staff"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Signup as a Expert
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/signup/student"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Signup as Student
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default page
