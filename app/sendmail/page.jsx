"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
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
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/reset-email`, formaData)
            console.log(response)
            toast.success("Email sent Successfully! Please Check Your Email")
            setFormData({
                email: ""
            })
        } catch (error) {
            console.log(error)
            toast.error('Email not found please enter valid email')
        }
    }
    console.log(formaData)
    return (
        <div className="flex items-center justify-center h-screen p-6 py-4 bg-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-center w-1/2 my-6 border border-[#10b981] rounded-lg items-star gap-x-4">
                <div className="w-3/4 py-3 ">
                    <h1 className='mb-5 font-bold '>Forget Password</h1>
                    <label className="block mb-1 font-bold text-gray-500" for="inline-full-name">
                        Email
                    </label>
                    <input className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="email" placeholder="Enter Email" name="email" required
                        value={formaData.email}
                        onChange={handleChange}
                    />

                    <div className="flex justify-start w-full mx-auto">
                        <button type='submit' className="bg-[#10b981]   text-white font-bold py-2 px-3  mt-3 border border-[#10b981] rounded">
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page
