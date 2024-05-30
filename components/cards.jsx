import React from "react";

const Cards = ({ text, number, icon }) => {
  return (
    <div className="flex justify-around items-center bg-white p-9 rounded-[5px] shadow-xl pl-5 w-1/3 mx-2">
      <div>
        <p className="mb-5">{text}</p>
        <number className=" text-3xl mt-5">{number}</number>
        {/* <span className="text-4xl mt-8">{number}</span> */}
      </div>

      <i className="bg-blue-200 p-6 rounded-full border-2 border-white ml-8">
        {icon}
      </i>
    </div>
  );
};

export default Cards;

// items-center justify-center flex-col h-full
