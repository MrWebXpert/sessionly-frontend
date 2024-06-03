"use client";
import React, { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import Table from "@/components/table/table";
import { useRouter } from "next/navigation";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

const Student = () => {
  // const router = useRouter();
  // const [students, setStudents] = useState([]);

  // const delItem = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/student/delete/${id}`
  //     );
  //     console.log("stall deleted and", response.data);
  //     setStudents((students) =>
  //       students.filter((student) => student._id !== id)
  //     );
  //     toast.success(response.data.message);
  //   } catch (error) {
  //     console.log(error);
  //     // toast.error(response.data.message)
  //   }
  // };
  // const updateitem = (id) => {
  //   router.push(`/dashboard/student/edit/${id}`);
  // };

  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     const response = await axios.get(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/student/all`
  //     );
  //     if (response) {
  //       setStudents(response.data.data);
  //     }
  //   };
  //   fetchStudents();
  // }, []);

  // console.log(students);

  return (
    <div className="bg-[#10b981] ">
      <div className="table w-full">
        <div className="flex items-center p-4 mb-5 bg-white border rounded-md ">
          {/* <h1 className="mr-4 text-xl">Session Listing</h1> */}
          {/* <button
            className="bg-[#10b981] py-2 px-4 text-white rounded-md"
            onClick={() => router.push("/dashboard/student/sessioncreate")}
          >
            Add Session
          </button> */}
        </div>
        <div className="px-4 ">
          <div className="">
            {/* <table className="w-full px-6 py-3 overflow-hidden text-center rounded-lg">


              <thead className="bg-[#10b981]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[6%]">
                    S.No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[12%]">
                    Session Images
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[15%]">
                    Session Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[11%]">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[11%]">
                    Subcategory
                  </th>
                  <th className="px-6 py-3 text-left text-xs ffont-bold text-gray-800 uppercase tracking-wider w-[11%]">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[11%]">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold  text-gray-800 uppercase tracking-wider w-[11%]">
                    Action
                  </th>
                </tr>
              </thead>
            </table> */}
            {/* {students &&
              students.map((student, index) => (

                <div className="overflow-x-auto ">
                  <table className="table">
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap w-[6%]">
                          {index}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[12%]">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                            className="w-12 h-12 rounded-full"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[15%]">
                          {student.username}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          Science
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          subScience
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          150s
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          200
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          <TbEdit />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))} */}

            <h1 className="text-center">Welcome to Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
