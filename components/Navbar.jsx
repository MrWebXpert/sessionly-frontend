"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [user, setUser] = useState(null)
    const [userImage, setUserImage] = useState('/dummy-profile.jpg')
    const [userType, setUserType] = useState('')
    const [email, setEmail] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const userId = localStorage.getItem('id')
        const userImageUrl = localStorage.getItem('profile') || '/dummy-profile.jpg'
        const userType = localStorage.getItem('userType')
        const userEmail = localStorage.getItem('email')

        if (userId) {
            setUser(userId)
            setUserImage(userImageUrl)
            setUserType(userType)
            setEmail(userEmail)
        }
    }, [])

    const handleLogout = () => {
        localStorage.clear()
        setUser(null)
        setUserImage('/dummy-profile.jpg')
        setUserType('')
        setEmail('')
        router.push('/')
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <header style={{ top: 0 }} className="fixed z-50 w-full bg-white" id="header_container">
                <div className="flex flex-row items-center px-4 py-4 h-18 md:px-10">
                    <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                        <img src="/logo.png" className="w-10 h-10" alt="Logo" />
                        <span className="ml-3 text-3xl font-bold text-black">Sessionly</span>
                    </a>

                    <div className="flex justify-end flex-1">
                        <div className="hidden p-2 mr-2 cursor-pointer lg:inline-block">
                            <div className="small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-teachers" onClick={() => { router.push('/Expertlisting') }}>Find an Expert</div>
                        </div>
                        <a className="hidden p-2 mr-2 lg:inline-block" href="/experts">
                            <div className="small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-application">Become an Expert</div>
                        </a>
                        {user ? (
                            <div className="relative">
                                <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                                    <img src={userImage} className="object-cover object-center w-10 h-10 mr-4 rounded-full" alt="User" />
                                </button>
                                {isOpen && (
                                    <div className="absolute right-0 z-10 mt-2 bg-white rounded-lg shadow-lg w-fit">
                                        <p className="p-4 text-gray-800">{email}</p>
                                        <button
                                            className="p-2 my-2 text-white bg-blue-600 rounded-lg shadow-md mx-7 "
                                            onClick={() => router.push("/dashboard/student")}
                                        >
                                            Dashboard
                                        </button>
                                        <button className="block w-full px-4 py-2 text-left text-gray-800 bg-gray-100 rounded-b hover:bg-gray-200" onClick={handleLogout}>Logout</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="hidden p-2 mr-2 cursor-pointer lg:inline-block small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-signin" onClick={() => router.push("/signin")} >Log in</div>
                                <div className="hidden p-2 cursor-pointer lg:inline-block small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-signup" onClick={() => router.push("/signup/student")}>Sign up</div>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar