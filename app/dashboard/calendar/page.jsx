"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());

  return (
    <div className=" text-center items-center  flex flex-col min-h-screen w-full bg-gray-200 ">
      {/* <h1 className="bg-white">NextJs Calendar - GeeksforGeeks</h1> */}
      <Calendar
        onChange={onChange}
        value={value}
        className="mt-10  h-full w-96 bg-white "
      />
    </div>
  );
}
