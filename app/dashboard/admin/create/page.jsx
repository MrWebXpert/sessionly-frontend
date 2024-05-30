"use client";
import AdminApi from "@/app/api/admin";
import BaseInputControl from "@/components/forms/BaseInputControl";
import { AdminEntity } from "@/models/admin.entity";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function page() {
  const admin = new AdminApi();
  const router = useRouter();
  const form = useFormik({
    initialValues: new AdminEntity(),
    validationSchema: AdminEntity.yupSchema(),
    onSubmit: async (values) => {
      try {
        const { ...restValues } = values;
        await admin.create(restValues);
        toast.success("Admin member created");
        router.push("/dashboard/admin");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });
  useEffect(() => {
    console.log("form.values", form.values);
    console.log("form.errors", form.errors);
  }, [form.values, form.errors]);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mt-6 ">Add Admin Member</h1>
      <form onSubmit={form.handleSubmit} className="my-6 flex flex-wrap gap-x-4 justify-center">
        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            Name
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Student Name Here" name="username" />
        </div>

        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            Email
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Email" name="email" />
        </div>
        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            IP#
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Ip" name="ip" />
        </div>

        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            User Type
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter User Type" name="usertype" />
        </div>
        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            Tel#
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Tel#" name="tel" />
        </div>
        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            Time of Login
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="time" placeholder="Enter Time of Login" name="timeoflogin" />
        </div>
        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            Time of LogOut
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="time" placeholder="Enter Time of Logout" name="timeoflogout" />
        </div>

        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            History
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter History" name="history" />
        </div>

        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            Track
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Track" name="history" />
        </div>
        <div className="mb-6 w-1/3">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            Activity
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Activity" name="activity" />
        </div>
        <div className="mb-6 w-[68%]">
          <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
            Action
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Action" name="action" />
          <div className="w-full mx-auto flex align-center justify-end">
            <button className="bg-[#10b981]   text-white font-bold py-2 px-3  mt-4 border border-[#10b981] rounded">
              Create
            </button>
          </div>
        </div>



      </form>
    </div>
  );
}
