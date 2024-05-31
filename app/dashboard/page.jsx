"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const router = useRouter();

  const [students, setStudents] = useState([]);
  const [experts, setExperts] = useState([])

  useEffect(() => {
    const handleUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/student/all`
        );
        setStudents(response.data.data);
        // console.log(response.data.data)
      } catch (error) {
        console.error("Error fetching the student data", error);
      }
    };

    handleUserData();
  }, []);
  useEffect(() => {
    const handleExpertData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/all`
        );
        setExperts(response.data.data);
        console.log("userdata in the console: ", response.data.data)
      } catch (error) {
        console.error("Error fetching the student data", error);
      }
    };

    handleExpertData();


  }, [])


  return (
    <>
      <div className="flex items-center justify-center h-screen mt-5 Box">
        {/* <div className="box w-[190px] h-[100px] shadow-xl rounded-xl bg-slate-300">
          <h1 className="px-3 mt-3 font-bold ">Number of Experts</h1>
          <h3 className="px-3 font-semibold">{experts.length}</h3>
        </div>
        <div className="box w-[190px] h-[100px] shadow-xl rounded-xl bg-slate-300">
          <h1 className="px-3 mt-3 font-bold ">Number of Students</h1>
          <h3 className="px-3 font-semibold">{students.length}</h3>
        </div> */}
        <div className="relative w-56 ml-10 overflow-hidden duration-700 cursor-pointer  group text-gray-50 h-72 rounded-2xl hover:duration-700">
          <div className="w-56 text-gray-800 h-72 bg-lime-400">
            <div className="flex justify-center h-full pt-10 text-6xl font-bold">
              {experts ? experts.length : "0"}
            </div>
          </div>
          <div className="absolute flex flex-col w-56 gap-1 p-3 duration-500 bg-gray-50 -bottom-24 group-hover:-bottom-0 group-hover:duration-600">
            <span className="text-3xl font-bold text-gray-800">Experts</span>
            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          </div>




        </div>
        <div className="relative w-56 ml-10 overflow-hidden duration-700 cursor-pointer  group text-gray-50 h-72 rounded-2xl hover:duration-700">
          <div className="w-56 text-gray-800 h-72 bg-lime-400">
            <div className="flex justify-center h-full pt-10 text-6xl font-bold">
              {students ? students.length : "0"}
            </div>
          </div>
          <div className="absolute flex flex-col w-56 gap-1 p-3 duration-500 bg-gray-50 -bottom-24 group-hover:-bottom-0 group-hover:duration-600">
            <span className="text-3xl font-bold text-gray-800">Students</span>
            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          </div>




        </div>
      </div>
    </>
  );
};

export default page;