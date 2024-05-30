"use client";
import TaskApi from "@/app/api/task";
import BaseInputControl from "@/components/forms/BaseInputControl";
import { TaskEntity } from "@/models/task.entity";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function page() {

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const handleChangeTask = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value
    });
  }

  const handleSubmintTask = async (e) => {
    e.preventDefault();
    console.log(taskData);
    setTaskData({
      title: "",
      description: "",
      assignedTo: "",
      dueDate: "",
    });
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/task/register`, taskData)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }



  const task = new TaskApi();
  const router = useRouter();
  // const form = useFormik({
  //   initialValues: new TaskEntity(),
  //   validationSchema: TaskEntity.yupSchema(),
  //   onSubmit: async (values) => {
  //     try {
  //       const { ...restValues } = values;
  //       await task.create(restValues);
  //       toast.success("Task  created");
  //       router.push("/dashboard/task");
  //     } catch (error) {
  //       toast.error("Something went wrong");
  //     }
  //   },
  // });

  // useEffect(() => {
  //   console.log("form.values", form.values);
  //   console.log("form.errors", form.errors);
  // }, [form.values, form.errors]);
  return (
    <div className="w-6/12 p-4 m-auto">
      <h1 className="text-2xl font-semibold">Add Task</h1>
      <form onSubmit={handleSubmintTask} className="my-6">
        {/* <BaseInputControl
          label="title"
          formik={form}
          name="title"
          required
          placeholder="John"
          className="my-2"
        />
        <BaseInputControl
          label="description"
          formik={form}
          name="description"
          required
          placeholder="add task"
          className="my-2"
        />
        <BaseInputControl
          label="complated"
          formik={form}
          name="completed"
          required
          placeholder="completed"
          className="my-2"
        />
        <BaseInputControl
          label="dueDate"
          formik={form}
          name="dueDate"
          required
          placeholder="23/04/2024"
          className="my-2"
        />
        <BaseInputControl
          label="assignedTo"
          formik={form}
          name="assignedTo"
          required
          placeholder="assignedTo"
          className="my-2"
        />
        <BaseInputControl
          label="assignedToElse"
          formik={form}
          name="assignedToElse"
          required
          placeholder="assignedToElse"
          className="my-2"
        />
        <BaseInputControl
          label="assignedBy"
          formik={form}
          name="assignedBy"
          required
          placeholder="assignedBy"
          className="my-2"
        />
        <BaseInputControl
          label="Timestamps"
          formik={form}
          name="timestamps"
          required
          placeholder="Timestamps"
          className="my-2"
        /> */}

        <BaseInputControl
          label="title"
          // formik={form}
          name="title"
          required
          placeholder="John"
          className="my-2"
          onChange={handleChangeTask}
          value={taskData.title}
        />
        <BaseInputControl
          label="description"
          // formik={form}
          name="description"
          required
          placeholder="add task"
          className="my-2"
          onChange={handleChangeTask}
          value={taskData.description}
        />
        <BaseInputControl
          label="dueDate"
          // formik={form}
          name="dueDate"
          type='Date'
          required
          placeholder="23/04/2024"
          className="my-2"
          onChange={handleChangeTask}
          value={taskData.dueDate}
        />
        {/* <BaseInputControl
          label="assignedTo"
          // formik={form}
          name="assignedTo"
          required
          placeholder="assignedTo"
          className="my-2"
          onChange={handleChangeTask}
          value={taskData.assignedTo}
        /> */}

        <button
          type="submit "
          className="bg-[#10b981] text-white border-2 border-[#10b981] px-3 py-1 mt-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}
