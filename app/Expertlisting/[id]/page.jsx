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
        <section className="overflow-hidden text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap items-center mx-auto justify-evenly lg:w-4/5">
                    <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
                        <h2 className="text-sm tracking-widest text-gray-500 title-font">Expert NAME</h2>
                        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font">{expert.username}</h1>
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
                        {/* {course &&
                            course.map((singalCourse, index) => (
                                // <h2>{singalCourse.title}
                                //     <button className="flex ml-auto text-white bg-[#10b981] border-0 py-2 px-6 focus:outline-none  rounded" onClick={() => handleSendPaymentPage(singalCourse._id)}>Book Now</button></h2>
                                <section class="text-gray-600 body-font">
                                    <div class="container px-5 my-1 mx-auto">
                                        <div class="w-full f flex  flex-wrap  mx-auto items-start bg-red-400 justify-center">
                                            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">{singalCourse.title}</h1>
                                            <button className="flex ml-auto text-white bg-[#10b981] border-0 py-2 px-6 focus:outline-none  rounded" onClick={() => handleSendPaymentPage(singalCourse._id)}>Book Now</button>
                                        </div>
                                    </div>
                                </section>
                            ))} */}

                    </div>
                    <img alt="ecommerce" className="object-cover w-1/5 rounded h-1/2" src={expert?.image || "Not Available"} />
                </div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-2 mx-auto">

                        {course &&
                            course.map((singalCourse, index) => (
                                <div class="flex flex-wrap -m-4">
                                    <div class="p-4 md:w-1/3">
                                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={singalCourse.image} alt="reload the page" />
                                            <div class="p-6">
                                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Session Name</h2>
                                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{singalCourse.title}</h1>
                                                <p class="leading-relaxed ">{singalCourse.description}</p>
                                                <p class="leading-relaxed ">Session Duration: {singalCourse.duration}</p>
                                                <p class="leading-relaxed font-semibold">Session Price : {singalCourse.sessionPrice}$</p>
                                                <div class="flex items-start flex-wrap ">
                                                    <button className="flex ml-auto text-white bg-[#10b981] border-0 py-2 px-6 focus:outline-none  rounded" onClick={() => handleSendPaymentPage(singalCourse._id)}>Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            </div>

        </section >




    )
}

export default Expertdeatils