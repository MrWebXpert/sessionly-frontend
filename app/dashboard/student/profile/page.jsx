"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Student = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [token, setToken] = useState(null);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    // Check if window is defined to ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));
      setStudentId(localStorage.getItem("id"));
    }
  }, []);

  useEffect(() => {
    const getStudent = async () => {
      if (token && studentId) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/student/get/${studentId}`, {
            headers: {
              Authorization: ` Bearer ${token}`
            }
          });
          console.log(response);
          if (response) {
            setStudent(response.data.verifyStudent);
          }
        } catch (error) {
          console.error("Error fetching student data", error);
        }
      }
    };
    getStudent();
  }, [token, studentId]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="table w-full">
        <div className="flex items-center justify-between p-4 mb-5 bg-white border rounded-md">
          <h1 className="text-xl">Welcome {student.username}</h1>
        </div>
        <div className="px-4">
          <div className="p-10">
            <div className="flex items-end justify-between py-1 mb-4 border-b-4 rounded-lg">
              {/* <img
                className="inline-flex object-cover border-4 border-[#10b981] rounded-full bg-indigo-50 h-40 w-40 mb-4 md:mb-0 ml-0 md:mr-5"
                src="https://media.istockphoto.com/id/1457948354/photo/successful-businesswoman-in-modern-office-working-on-laptop.jpg?s=1024x1024&w=is&k=20&c=X8KTk6fECCQOEroqDivRAVF7U3mU5f-qrkOO4nbw9r0="
                alt=""
              /> */}
              <button
                className="bg-[#10b981] py-2 px-4 text-white rounded-md"
                onClick={() => router.push(`/dashboard/student/profile/edit/${studentId}`)}
              >
                Edit Profile
              </button>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border-none border-b-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                  readOnly
                  value={student.username}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none border-none"
                  readOnly
                  value={student.email}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none border-none"
                  readOnly
                  value={student.phone}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;