import React from "react";
import { Icon, Icon_1, Icon_2, Icon_3, MoreVertIcon } from "../../../assets";

const TransactionsCard = () => {
  return (
    <div className="w-full md:w-8/12 flex flex-col gap-8 card">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-[20px] font-semibold">Transactions</span>
          <span className="text-[14px] text-gray-500">
            Total 48.5% Growth 😎 this month
          </span>
        </div>
        <img className="" src={MoreVertIcon} alt="" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <img className="bg-blue-600 rounded p-1.5" src={Icon} alt="" />
          <div className="flex flex-col">
            <span className="text-[12px] text-gray-500">Sales</span>
            <span className="text-xl font-semibold">245k</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img className="bg-green-500 rounded p-1.5" src={Icon_1} alt="" />
          <div className="flex flex-col">
            <span className="text-[12px] text-gray-500">Customers</span>
            <span className="text-xl font-semibold">12.5k</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img className="bg-yellow-500 rounded p-1.5" src={Icon_2} alt="" />
          <div className="flex flex-col">
            <span className="text-[12px] text-gray-500">Product</span>
            <span className="text-xl font-semibold">1.54k</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img className="bg-sky-500 rounded p-1.5" src={Icon_3} alt="" />
          <div className="flex flex-col">
            <span className="text-[12px] text-gray-500">Revenue</span>
            <span className="text-xl font-semibold">$88k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsCard;
