import { useState } from "react";
import AddProduct from "./AddProduct";

const StockListHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-6 pb-4">
      <div className="flex flex-col ">
        <span className="text-lg font-semibold text-gray-900">
          Stock Product List
        </span>
        <span className="text-sm font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Risus in nulla faucibus risus.
        </span>
      </div>
      <button
        className="btn_primary text-xs lg:text-lg w-48 h-12"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Product
      </button>
      <AddProduct isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default StockListHeader;
