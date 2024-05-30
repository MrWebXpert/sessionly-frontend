import React from "react";

const List = ({ heading, para, button }) => {
  return (
    <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-white flex   border-2 shadow-xl flex-col  px-6 py-6 rounded-[5px]">
        <p className=" text-black mb-1">{heading}</p>
        <p className="text-gray-300">{para}</p>
        <button className="text-white mt-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          {button}
        </button>
      </div>
    </div>
  );
};

export default List;
