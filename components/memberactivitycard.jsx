import React from "react";
import { AiOutlineStar } from "react-icons/ai";
const Memberactivitycard = () => {
  return (
    <div className="bg-white w-[470px]">
      <div className="flex items-center justify-between p-4">
        <div>
          <h6 className="text-md font-medium">Welocm Seasonly</h6>
          <p>What Members Perform Status</p>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-l-md">
            Todat
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 ">
            Week
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-r-md">
            Month
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 overflow-x-scroll">
        <table className="table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 items-start">Name</th>
              <th className="px-4 py-2">Earnings</th>
              <th className="px-4 py-2">Post</th>
              <th className="px-4 py-2">Reviews</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-[2px] border-gray-100">
              <td className="px-4 py-4 flex items-center">
                <div className="w-12 h-12">
                  <img
                    src="https://monster-react-main.netlify.app/assets/user3-ded97fcc.jpg"
                    alt=""
                    className="w-full rounded-full"
                  />
                </div>
                <h6 className="ml-5 font-semibold">Name is Afzaal</h6>
              </td>
              <td className="px-5 py-2">$3,50</td>
              <td className="px-5 py-2">Low</td>
              <td className="px-9 py-2">
                <div className="flex">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </td>
            </tr>
            <tr className="border-t-[2px] border-gray-100">
              <td className="px-4 py-4 flex items-center">
                <div className="w-12 h-12">
                  <img
                    src="https://monster-react-main.netlify.app/assets/user3-ded97fcc.jpg"
                    alt=""
                    className="w-full rounded-full"
                  />
                </div>
                <h6 className="ml-5 font-semibold">Name is Afzaal</h6>
              </td>
              <td className="px-5 py-2">$3,50</td>
              <td className="px-5 py-2">Low</td>
              <td className="px-9 py-2">
                <div className="flex">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </td>
            </tr>
            <tr className="border-t-[2px] border-gray-100">
              <td className="px-4 py-4 flex items-center">
                <div className="w-12 h-12">
                  <img
                    src="https://monster-react-main.netlify.app/assets/user3-ded97fcc.jpg"
                    alt=""
                    className="w-full rounded-full"
                  />
                </div>
                <h6 className="ml-5 font-semibold">Name is Afzaal</h6>
              </td>
              <td className="px-5 py-2">$3,50</td>
              <td className="px-5 py-2">Low</td>
              <td className="px-9 py-2">
                <div className="flex">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </td>
            </tr>
            <tr className="border-t-[2px] border-gray-100">
              <td className="px-4 py-4 flex items-center">
                <div className="w-12 h-12">
                  <img
                    src="https://monster-react-main.netlify.app/assets/user3-ded97fcc.jpg"
                    alt=""
                    className="w-full rounded-full"
                  />
                </div>
                <h6 className="ml-5 font-semibold">Name is Afzaal</h6>
              </td>
              <td className="px-5 py-2">$3,50</td>
              <td className="px-5 py-2">Low</td>
              <td className="px-9 py-2">
                <div className="flex">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </td>
            </tr>
            <tr className="border-t-[2px] border-gray-100">
              <td className="px-4 py-4 flex items-center">
                <div className="w-12 h-12">
                  <img
                    src="https://monster-react-main.netlify.app/assets/user3-ded97fcc.jpg"
                    alt=""
                    className="w-full rounded-full"
                  />
                </div>
                <h6 className="ml-5 font-semibold">Name is Afzaal</h6>
              </td>
              <td className="px-5 py-2">$3,50</td>
              <td className="px-5 py-2">Low</td>
              <td className="px-9 py-2">
                <div className="flex">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Memberactivitycard;
