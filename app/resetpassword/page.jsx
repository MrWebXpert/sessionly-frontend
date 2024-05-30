"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [formaData, setFormData] = useState({
        password: "",
    })
    const [confirmpassword, setConfirmPassword] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formaData, [name]: value })
    }

    console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formaData.password !== confirmpassword) {
            toast.error('Password dose not match')
        }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/reset-new-password/${id}/${token}`, formaData)
            console.log(response)
            toast.success("Email sent Successfully! Please Check Your Email")
        } catch (error) {
            console.log(error)
        }
    }
    console.log(formaData)
    return (
        <div className="flex items-center justify-center h-screen p-6 py-4 bg-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-center w-1/2 my-6 border border-[#10b981] rounded-lg items-star gap-x-4">
                <div className="w-3/4 py-3 ">
                    <h1 className='mb-5 font-bold '>Enter New Password</h1>
                    <label className="block mb-1 font-bold text-gray-500" for="inline-full-name">
                        Password
                    </label>
                    <input className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981] mb-4" id="inline-full-name" type="password" placeholder="Enter new Password" name="password" required
                        value={formaData.email}
                        onChange={handleChange}
                    />
                    <label className="block mb-1 font-bold text-gray-500" for="inline-full-name">
                        Confirm Password
                    </label>
                    <input className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="password" placeholder="Confirm your Password" name="email" required
                        value={confirmpassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }}
                    />

                    <div className="flex justify-start w-full mx-auto">
                        <button type='submit' className="bg-[#10b981]   text-white font-bold py-2 px-3  mt-3 border border-[#10b981] rounded">
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page
