"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [formaData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formaData, [name]: value })
    }

    // creating Staff Member

    const createStaff = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/register`, formaData)
            console.log(response)

            if (response) {
                localStorage.setItem("expertId", response.data.result._id)
                toast.success("Expert Created Successfully")
                router.push("/dashboard/experts")
            }
        } catch (error) {
            console.error("Error While creating Expert", error.message)
        }
        setFormData({
            username: "",
            email: "",
            password: "",
            phone: ""
        })
    }

    console.log(formaData)

    return (
        <div className="p-6 bg-gray-100 ">
            <h1 className="p-4 font-bold bg-white">Add Expert</h1>
            <div className="w-full p-10 mt-3 bg-white">
                <form onSubmit={createStaff} className='w-11/12 mx-auto'>
                    <div className="w-full mb-6">
                        <label className="block mb-1 font-bold text-gray-500" for="inline-full-name">
                            Expert Name
                        </label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Expert" name="username" required
                            value={formaData.username}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full mb-6">
                        <label className="block mb-1 font-bold text-gray-500" for="inline-full-name">
                            Email
                        </label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="email" placeholder="Enter Email" name="email" required
                            value={formaData.email}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full mb-6">
                        <label className="block mb-1 font-bold text-gray-500" for="inline-full-name">
                            Password
                        </label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="password" placeholder="Enter password" name="password" required
                            value={formaData.password}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full mb-6">
                        <label className="block mb-1 font-bold text-gray-500" for="inline-full-name">
                            Phone
                        </label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter phone Number" name="phone" required
                            value={formaData.phone}
                            onChange={handleChange} />
                    </div>


                    <div className="w-full mx-auto">
                        <button className="bg-[#10b981]  text-white font-bold py-2 px-3  mt-1 border border-[#10b981] rounded">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page
