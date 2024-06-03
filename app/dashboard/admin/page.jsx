"use client";
import Table from "@/components/table/table";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const router = useRouter();

  const [transections, setTranection] = useState([]);
  useEffect(() => {
    const allTransection = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/bookings`
      );
      console.log(response.data.data);
      if (response) {
        setTranection(response.data.data);
      }
    };
    allTransection();
  }, []);
  console.log(transections)

  return (
    <div className="bg-gray-100">
      <div className="table w-full">
        <div className="flex items-center justify-between p-4 mb-5 bg-white border rounded-md ">
          <h1>Transection Listing</h1>
        </div>

        <div className="px-4 bg-[#10b981] ">
          <div className="">
            <table className="w-full px-6 py-3 overflow-hidden text-center rounded-lg">
              <thead className="bg-[#10b981]">
                <tr>
                  {/* <th className="px-6 py-3  font-bold   text-left text-xs text-gray-800 uppercase tracking-wider w-[6%]">
                    S.No
                  </th> */}

                  <th className="px-6 py-3  font-bold  text-left text-xs  text-gray-800 uppercase tracking-wider w-[15%]">
                    Student ID
                  </th>
                  <th className="px-6 py-3  font-bold  text-left text-xs  text-gray-800 uppercase tracking-wider w-[11%]">
                    Session
                  </th>
                  <th className="px-6 py-3  font-bold  text-left text-xs  text-gray-800 uppercase tracking-wider w-[11%]">
                    Date
                  </th>
                  <th className="px-6 py-3  font-bold  text-left text-xs  text-gray-800 uppercase tracking-wider w-[11%]">
                    Time
                  </th>
                  <th className="px-6 py-3  font-bold  text-left text-xs  text-gray-800 uppercase tracking-wider w-[11%]">
                    Price
                  </th>
                  <th className="px-6 py-3  font-bold  text-left text-xs  text-gray-800 uppercase tracking-wider w-[11%]">
                    Status
                  </th>
                </tr>
              </thead>
            </table>
            {transections &&
              transections.map((transection, index) => (
                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        {/* <td className="px-6 py-4 whitespace-nowrap w-[6%]">
                          {index + 1}
                        </td> */}

                        <td className="px-6 py-4 whitespace-nowrap w-[15%] text-sm">
                          {transection.student._id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          {transection.course?.title || "Not available"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          {new Date(transection.bookingDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          {new Date(transection?.bookingDate || "not available").toLocaleTimeString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          $200
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-[11%]">
                          {transection.status}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Page;