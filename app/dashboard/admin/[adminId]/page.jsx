"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { staffId } = useParams();
  console.log(staffId);
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold">Staff Id: {staffId}</h1>
      </div>
    </>
  );
};

export default page;
