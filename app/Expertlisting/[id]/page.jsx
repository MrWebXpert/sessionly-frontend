"use client"
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Expertdeatils = () => {
    const [expert, setExpert] = useState([]);
    const [course, setCourse] = useState()


    const { id } = useParams()
    const router = useRouter()
    console.log("expert id", id)
    useEffect(() => {
        const getExpert = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/get/${id}`);
                console.log(response.data.verifyStaff);
                if (response) {
                    setExpert(response.data.verifyStaff);
                    setCourse(response.data.verifyStaff.course)
                }
            } catch (error) {
                console.log(error)
            }
        };

        getExpert();
    }, []);

    const handleSendPaymentPage = (id) => {
        localStorage.setItem("courseId", id)
        router.push(`/payment/${id}`)
    }

    console.log("courses is", course)
    return (
        <div><section className="overflow-hidden text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap mx-auto lg:w-4/5">
                    <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
                        <h2 className="text-sm tracking-widest text-gray-500 title-font">Expert NAME</h2>
                        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font">{expert.username}</h1>
                        {/* <div className="flex mb-4">
                            <a className="flex-grow px-1 py-2 text-lg text-indigo-500 border-b-2 border-indigo-500">Description</a>
                            <a className="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">Reviews</a>
                            <a className="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">Details</a>
                        </div> */}
                        <p className="mb-4 leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                        <div className="flex py-2 border-t border-gray-200">
                            <span className="text-gray-500">teacherType</span>
                            <span className="ml-auto text-gray-900">{expert.teacherType || "Not Available"}</span>
                        </div>
                        <div className="flex py-2 border-t border-gray-200">
                            <span className="text-gray-500">Contact</span>
                            <span className="ml-auto text-gray-900">{expert.phone || "Not Available"}</span>
                        </div>
                        <div className="flex py-2 mb-6 border-t border-b border-gray-200">
                            <span className="text-gray-500">languageofExpertise</span>
                            <span className="ml-auto text-gray-900">{expert.languageofExpertise || "Not Available"}</span>
                        </div>
                        {/* <div className="flex w-full py-2 mb-6 border-t border-b border-gray-200">
                            <h1>Select Session</h1>
                            <select>
                                {course &&
                                    course.map((singalCourse, index) => (
                                        <option key={index} >
                                            {singalCourse.title}
                                            <span className="text-2xl font-medium text-gray-900 title-font">{expert.sessionPrice || 20}$ </span>
                                            <button className="flex ml-auto text-white bg-[#10b981] border-0 py-2 px-6 focus:outline-none  rounded" onClick={() => handleSendPaymentPage(courseId)}>Book Now</button>
                                        </option>
                                    ))}
                            </select>


                        </div> */}
                        <div className="flex w-full py-2 mb-6 border-t border-b border-gray-200">
                            {course &&
                                course.map((singalCourse, index) => (
                                    <h2>{singalCourse.title}   <button className="flex ml-auto text-white bg-[#10b981] border-0 py-2 px-6 focus:outline-none  rounded" onClick={() => handleSendPaymentPage(singalCourse._id)}>Book Now</button></h2>
                                ))}


                        </div>
                        {/* <div className="flex">
                            <span className="text-2xl font-medium text-gray-900 title-font">{expert.sessionPrice || 20}$ </span>
                            <button className="flex ml-auto text-white bg-[#10b981] border-0 py-2 px-6 focus:outline-none  rounded" onClick={() => handleSendPaymentPage(courseId)}>Book Now</button>
                        </div> */}
                    </div>
                    <img alt="ecommerce" className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src={"https://dummyimage.com/400x400" || expert.image} />
                </div>
            </div>
        </section ></div >
    )
}

export default Expertdeatils