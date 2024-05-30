"use client";
import TaskApi from "@/app/api/task";
import BaseInputControl from "@/components/forms/BaseInputControl";
import { TaskEntity } from "@/models/task.entity";
import { useEffectAsync } from "@/utils/react";
import { useFormik } from "formik";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [task, setTask] = useState();
  const { taskId } = useParams();
  const taskApi = new TaskApi();
  const router = useRouter();
  const form = useFormik({
    initialValues: new TaskEntity(),
    validationSchema: TaskEntity.yupSchema(),
    onSubmit: async (values) => {
      try {
        const { ...restValues } = values;
        await taskApi.edit(restValues);
        toast.success("task member updated");
        router.push("/dashboard/task");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });
  useEffectAsync(async () => {
    if (taskId) {
      const data = await taskApi.getById(taskId);
      setTask(data);
      console.log("single task", data);
    }
  }, []);
  useEffect(() => {
    console.log("form.values", form.values);
    console.log("form.errors", form.errors);
  }, [form.values, form.errors]);
  return (
    <div className="p-4 w-6/12 m-auto ">
      <h1 className="text-2xl font-semibold">Add Task </h1>
      <form onSubmit={form.handleSubmit} className="my-6">
        <BaseInputControl
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
          placeholder="description"
          className="my-2"
        />
        <BaseInputControl
          label="completed"
          formik={form}
          name="text"
          required
          placeholder="complated"
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
          label="timestamps"
          formik={form}
          name="timestamps"
          required
          placeholder="timestamps"
          className="my-2"
        />
        <button
          type="submit"
          className="bg-[#10b981] text-white border-2 border-[#10b981] px-3 py-1 mt-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
