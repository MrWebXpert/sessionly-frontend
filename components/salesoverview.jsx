import React from "react";

const Salesoverview = () => {
  return (
    <div className="ml-3 bg-white">
      <div className="flex items-center justify-between pt-9 ">
        <div className="pl-3">
          <h6 className="text-md font-medium">Sales Overview</h6>
          <p>Check the monthly sales</p>
        </div>
        <div className="mx-3 p-2 border-gray-200 border shadow-md outline-none">
          <select name="" id="">
            <option value="">Monthly</option>
            <option value="">Daily</option>
            <option value="">Weekly</option>
            <option value="">Yearly</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between py-9 ">
        <div className="pl-3">
          <h6 className="text-md font-medium">March 2022</h6>
          <p>Report of this month</p>
        </div>
        <div className="mx-3 p-2 ">$3,600</div>
      </div>
      <div className="bg-white ">
        <div className="flex items-center justify-between px-4 ">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 w-2/5 text-start">Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Price</th>
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
                <td className="px-5 py-2 ">
                  <span className="bg-red-500 p-1 rounded-[5px]">Low</span>
                </td>
                <td className="px-9 py-2">April 9,2020</td>
                <td className="px-5 py-2">$3,50</td>
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
                <td className="px-5 py-2 ">
                  <span className="bg-red-500 p-1 rounded-[5px]">Low</span>
                </td>
                <td className="px-9 py-2">April 9,2020</td>
                <td className="px-5 py-2">$3,50</td>
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
                <td className="px-5 py-2 ">
                  <span className="bg-red-500 p-1 rounded-[5px]">Low</span>
                </td>
                <td className="px-9 py-2">April 9,2020</td>
                <td className="px-5 py-2">$3,50</td>
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
                <td className="px-5 py-2 ">
                  <span className="bg-red-500 p-1 rounded-[5px]">Low</span>
                </td>
                <td className="px-9 py-2">April 9,2020</td>
                <td className="px-5 py-2">$3,50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Salesoverview;
