'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import FileBase from 'react-file-base64'

const Student = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState({});
  const [adminId, setAdminId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = ({ base64 }) => {
    setSelectedFile(base64);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/upload`, {
        data: selectedFile,
      });

      if (response.data && response.data.imageUrl) {
        setProfileImage(response.data.imageUrl);
        toast.success("Profile image updated successfully");
      }
    } catch (error) {
      console.error("Error uploading file", error.message);
      toast.error("Failed to upload image");
    }
  };

  useEffect(() => {
    // Only access localStorage on the client side
    const storedAdminId = localStorage.getItem('id');
    setAdminId(storedAdminId);

    const getAdmin = async () => {
      if (storedAdminId) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/admin/get/${storedAdminId}`);
          if (response.data.verifyAdmin) {
            setAdmin(response.data.verifyAdmin);
          }
        } catch (error) {
          console.error("Error fetching admin data", error);
        }
      }
    };

    getAdmin();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="table w-full">
        <div className="flex items-center justify-between p-4 mb-5 bg-white border rounded-md ">
          <h1 className="text-xl">Welcome {admin.username}</h1>
        </div>
        <div className="px-4">
          <div className="p-10">
            <div className="flex items-end justify-between py-1 mb-4 border-b-4 rounded-lg">
              {/* <img
                className="inline-flex object-cover border-4 border-[#10b981] rounded-full bg-indigo-50 h-40 w-40 mb-4 md:mb-0 ml-0 md:mr-5"
                src={profileImage}
                alt="Admin Profile"
              /> */}
              {/* <FileBase type="file" multiple={false} onDone={handleFileChange} />
              <button
                className="bg-[#10b981] py-2 px-4 text-white rounded-md"
                onClick={handleFileUpload}
              >
                Upload Profile Image
              </button> */}
              <button
                className="bg-[#10b981] py-2 px-4 text-white rounded-md"
                onClick={() => router.push(`/dashboard/admin/profile/edit/${adminId}`)}
              >
                Edit Profile
              </button>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="shadow-sm bg-gray-50 border-none border-b-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                  readOnly
                  value={admin.username || ""}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-none border-b-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                  readOnly
                  value={admin.email || ""}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="shadow-sm bg-gray-50 border-none border-b-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                  readOnly
                  value={admin.phone || ""}
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