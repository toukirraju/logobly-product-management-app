import { cupIcon } from "../../../assets";

const BestSellerCard = () => {
  return (
    <div className="w-full md:w-4/12 flex  items-end card">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-[20px] font-semibold">
            Congratulations Howard 🎉
          </span>
          <span className="text-[14px] text-gray-500">
            Best seller of the month
          </span>
        </div>
        <span className="py-2 text-blue-600 text-[24px]">$42.8k</span>
        <button className="text-center w-24 rounded text-white bg-blue-600 py-1 px-1">
          View Sales
        </button>
      </div>
      <img className="max-h-[90px] w-[70px]" src={cupIcon} alt="" />
    </div>
  );
};

export default BestSellerCard;
