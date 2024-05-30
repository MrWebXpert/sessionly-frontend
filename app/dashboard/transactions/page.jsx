import React from "react";

import Table from "@/components/table/table";

const Transactions = () => {
  return (
    <div className="main bg-gray-100 w-full">
      <div className="w-full">
        <h1 className="ml-5 ">Dashbord Transaction</h1>
        <div className="table w-full">
          <div className="px-4 py-5">
            <h1 className="bg-white p-4">Transactions</h1>
          </div>

          <div className="px-4 rounded-md  border-2">
            <h1 className="bg-white p-4 rounded-md  border-b-2">
              Transactions History
            </h1>
            <Table
              number="Experts Name"
              name=" Student Name"
              email="Course Name"
              role="Date"
              status="Amount"
              action="Status"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
