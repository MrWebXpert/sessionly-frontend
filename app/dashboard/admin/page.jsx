"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { useEffectAsync } from "@/utils/react";
import { toast } from "react-toastify";
import Link from "next/link";
import AdminApi from "@/app/api/admin";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const page = () => {
  const [admins, setAdmins] = useState([]);
  const router = useRouter();
  // const onDeleteClick = async (adminId) => {
  //   const adminApi = new AdminApi();
  //   try {
  //     await adminApi.remove(adminId);
  //     setAdmins(admins.filter((v) => v._id != adminId));
  //     toast.success("Admin Removed Successfully");
  //   } catch (error) {
  //     toast.error("Something went wrong");
  //   }
  // };
  useEffectAsync(async () => {
    try {
      const adminApi = new AdminApi();
      const data = await adminApi.list();
      console.log("admin data list", data.data);
      setAdmins(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="flex items-center justify-between p-4 mb-5 bg-white border rounded-md ">
        <h1 className="text-xl">Admin Listing</h1>
      </div>
      <div className="px-4 ">
        <div className="">
          <table className="w-full px-6 py-3 overflow-hidden text-center rounded-lg" >
            <thead className="">
              <tr className="mb-10 bg-[#10b981] ">
                <th className="w-1/3 px-5 py-2 text-start">Admin Name</th>
                <th className="w-1/3 px-6 py-2 text-start">Admin Email</th>
                <th className="w-1/3 py-2 pl-8 text-start">Phone No.</th>
                <th className="w-1/3 px-6 py-2 text-start">Actions</th>
                {/* <th className="px-16 py-2">{email}</th>
                        <th className="px-16 py-2">{role}</th>
                        <th className="px-16 py-2">{status}</th>
                        <th className="px-16 py-2">{action}</th> */}
              </tr>
            </thead>
          </table>
          {admins.map((admin, index) => (
            <table className="w-full px-6 py-3 overflow-hidden text-center rounded-lg" key={index}>
              <tbody className="table-body ">
                <tr className="flex items-start justify-start mt-2 border-none experts">
                  <td className="w-1/3 px-4 py-4 text-start">{admin.username}</td>
                  <td className="w-1/3 px-4 py-4 text-start">{admin.email}</td>
                  <td className="w-1/3 px-4 py-4 text-start">{admin.phone}</td>
                  <td className="flex items-center px-4 py-4">
                    <RiDeleteBin6Line className="mr-2 text-xl border rounded-md " onClick={() => {
                      delItem(student._id)
                    }} />
                    <FiEdit className="mr-2 text-xl border rounded-md" onClick={() => {
                      updateitem(student._id)
                    }} />
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
