"use client";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { useEffectAsync } from "@/utils/react";
import { toast } from "react-toastify";
import Link from "next/link";
import TaskApi from "@/app/api/task";
import axios from "axios";

const page = () => {
    const [courses, setCourses] = useState([]);
    const [data, setData] = useState(null)
    const router = useRouter();
    // const onDeleteClick = async (taskId) => {
    //     const taskApi = new TaskApi();
    //     try {
    //         await taskApi.remove(taskId);
    //         setTask(task.filter((v) => v._id != taskId));
    //         toast.success("Task Removed Successfully");
    //     } catch (error) {
    //         toast.error("Something went wrong");
    //     }
    // };
    // useEffectAsync(async () => {
    //     try {
    //         const taskApi = new taskApi();
    //         const data = await taskApi.list();
    //         console.log("task data list", data.data);
    //         setTask(data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);


    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/course/all`;
    const fetchData = async () => {
        const res = await axios.get(url);
        setCourses(res.data.data)
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <div className="flex justify-end">
                <button
                    className="m-4 py-1 px-2 rounded bg-[#10b981] text-white"
                    onClick={() => router.push("/dashboard/course/create")}
                >
                    create course
                </button>
            </div>
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-lg bg-[#10b981] text-white text-left">
                        <th>S.No</th>
                        {/* <th>Category Image</th> */}
                        <th>Course Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>User Type</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {courses.map((task, index) => (
                        <tr className="border-b border-gray-300 bg-slate-50" key={index}>
                            <td className="text-center">{index + 1}</td>
                            {/* <td>
                <img
                                    src={admin.categoryImage}
                                    alt={item.categoryName}
                                    className="rounded-full max-w-10"
                                />
              </td> */}
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.complated}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.assignedTo}</td>
                            {/* <td>{task.assignedToElse}</td> */}
                            {/* <td>{task.assignedBy}</td> */}
                            {/* <td>{task.imestamps}</td> */}
                            <td>
                                <Link
                                    href={`/dashboard/task/${task._id}/edit`}
                                    className="p-2 text-center"
                                >
                                    <span className="flex text-xl text-black rounded-md ">
                                        <FaRegEdit />

                                        <AiOutlineDelete
                                            onClick={() => onDeleteClick(task._id)}
                                            className="ml-2 text-xl"
                                        />
                                    </span>
                                </Link>
                                {/* <button onClick={() => onDeleteClick(task._id)}>Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default page;
