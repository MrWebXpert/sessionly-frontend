"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [formaData, setFormData] = useState({
        username: "",
        // email: "",
        // password: "",
        phone: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formaData, [name]: value })
    }

    // creating Staff Member

    const expertId = localStorage.getItem("expertId")
    console.log(expertId)
    const updateStaff = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/update/${expertId}`, formaData)
            console.log(response)

            if (response) {
                toast.success("Expert Created Successfully")
                router.push("/dashboard/experts")
            }
        } catch (error) {
            console.error("Error While creating Expert", error.message)
        }
    }

    console.log(formaData)

    return (
        <div className="p-6 bg-gray-100 ">
            <h1 className="p-4 font-bold bg-white">Edit Expert</h1>
            <div className="w-1/2 p-10 mx-auto mt-3 bg-white">
                <form onSubmit={updateStaff} className='w-11/12 mx-auto'>
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
                            Phone
                        </label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter phone Number" name="phone" required
                            value={formaData.phone}
                            onChange={handleChange} />
                    </div>


                    <div className="w-full mx-auto">
                        <button className="bg-[#10b981]  text-white font-bold py-2 px-3  mt-1 border border-[#10b981] rounded">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page
