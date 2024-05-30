"use client";
// import React, { useState } from "react";
// // import "./table.css";
// import { data } from "../data";
// import Link from "next/link";
// import { FaRegEdit } from "react-icons/fa";

// const Table = () => {
//   const [userData, setUserData] = useState(data);

//   return (
//     <table className="w-full  text-sm">
//       <thead>
//         <tr className="text-lg bg-[#10b981] text-white text-left">
//           <th className="text-center">S.No</th>
//           <th>Category Image</th>
//           <th>Category Name</th>
//           <th>Subcategory</th>
//           <th>Description</th>
//           <th>Date</th>
//           <th>Action</th>
//         </tr>
//       </thead>

//       <tbody>
//         {userData.map((item, index) => (
//           <tr className="bg-slate-50 border-b border-gray-300" key={index}>

//             <td className="text-center">{index + 1}</td>
//             <td>
//               <img
//                 src={item.categoryImage}
//                 alt={item.categoryName}
//                 className="max-w-10 rounded-full"
//               />
//             </td>
//             <td>{item.categoryName}</td>
//             <td>{item.subcategory}</td>
//             <td>{item.description}</td>
//             <td>{item.date}</td>
//             <td>
//               <Link
//                 href={`/dashboard/category/${item.id}`}
//                 className="text-center p-2"
//               >
//                 <span className=" text-xl rounded-md text-black">
//                   <FaRegEdit />
//                 </span>
//               </Link>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import "./table.css";
const Table = ({ number, name, email, role, status, action }) => {
  return (
    <div className="">
      <table className="text-center w-full px-6 py-3 rounded-lg overflow-hidden  mb-10">
        <thead className="">
          <tr className="mb-5">
            <th className="py-2 px-16  ">{number}</th>
            <th className="py-2 px-16 ">{name}</th>
            <th className="py-2 px-16">{email}</th>
            <th className="py-2 px-16">{role}</th>
            <th className="py-2 px-16">{status}</th>
            <th className="py-2 px-16">{action}</th>
          </tr>
        </thead>

        <tbody className="table-body ">
          <tr className="experts p-10 ">
            <td>1</td>
            <td>Laybha</td>
            <td>laybhashahid@123</td>
            <td>SubAdmin</td>
            <td>
              <span className=" py-1 px-6 rounded-xl">Experts</span>
            </td>
            <td className="flex items-center justify-center py-4 ">
              <RiDeleteBin6Line className="text-xl mr-2  border rounded-md  " />
              <FiEdit className="text-xl mr-2 border  rounded-md" />
            </td>

            {/* <td>{number.Number}</td>
            <td>{name.Name}</td>
            <td>{email.Email}</td>
            <td>{role.Role}</td>
            <td>{status.Status}</td>
            <td>{action.icon}</td> */}
          </tr>

          <tr className="experts">
            <td>2</td>
            <td>Laybha</td>
            <td>laybhashahid@123</td>
            <td>SubAdmin</td>
            <td>
              <span className=" py-1 px-6 rounded-xl">Experts</span>
            </td>
            <td className="flex items-center justify-center py-4">
              <RiDeleteBin6Line className="text-xl mr-2  border rounded-md" />
              <FiEdit className="text-xl mr-2 border rounded-md" />
            </td>
          </tr>

          <tr className="experts">
            <td>3</td>
            <td>Laybha</td>
            <td>laybhashahid@123</td>
            <td>SubAdmin</td>
            <td className="experts">
              <span className=" py-1 px-6 rounded-xl">Experts</span>
            </td>
            <td className="flex items-center justify-center py-4">
              <RiDeleteBin6Line className="text-xl mr-2  border rounded-md" />
              <FiEdit className="text-xl mr-2 border rounded-md" />
            </td>
          </tr>

          <tr className="experts">
            <td>4</td>
            <td>Laybha</td>
            <td>laybhashahid@123</td>
            <td>SubAdmin</td>
            <td>
              <span className=" py-1 px-6 rounded-xl">Experts</span>
            </td>
            <td className="flex items-center justify-center py-4">
              <RiDeleteBin6Line className="text-xl mr-2  border rounded-md" />
              <FiEdit className="text-xl mr-2 border rounded-md" />
            </td>
          </tr>
          <tr className="experts">
            <td>5</td>
            <td>Laybha</td>
            <td>laybhashahid@123</td>
            <td>SubAdmin</td>
            <td>
              <span className=" py-1 px-6 rounded-xl">Experts</span>
            </td>
            <td className="flex items-center justify-center py-4">
              <RiDeleteBin6Line className="text-xl mr-2  border rounded-md" />
              <FiEdit className="text-xl mr-2 border rounded-md" />
            </td>
          </tr>
          <tr className="experts ">
            <td>6</td>
            <td>Laybha</td>
            <td>laybhashahid@123</td>
            <td>SubAdmin</td>
            <td>
              <span className=" py-1 px-6 rounded-xl">Experts</span>
            </td>
            <td className="flex items-center justify-center py-4">
              <RiDeleteBin6Line className="text-xl mr-2  border rounded-md" />
              <FiEdit className="text-xl mr-2 border rounded-md" />
            </td>
          </tr>

          <tr className="experts ">
            <td>7</td>
            <td>Laybha</td>
            <td>laybhashahid@123</td>
            <td>SubAdmin</td>
            <td>
              <span className=" py-1 px-6 rounded-xl">Experts</span>
            </td>
            <td className="flex items-center justify-center py-4">
              <RiDeleteBin6Line className="text-xl mr-2  border rounded-md" />
              <FiEdit className="text-xl mr-2 border rounded-md" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
