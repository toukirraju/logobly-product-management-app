import { Icon, Icon_1, Icon_2, Icon_3, MoreVertIcon } from "../../../assets";

const BalanceReport = () => {
  return (
    <div className="w-full md:w-4/12 px-3 pt-6 lg:pt-0">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[24px] font-semibold">$482.85k</span>
          <span className="text-sm font-normal text-gray-500">
            Last month balance $234.40k
          </span>
        </div>
        <img className="hidden lg:block" src={MoreVertIcon} alt="" />
      </div>
      <div className=" flex flex-col gap-3 mt-2">
        <div className="flex items-center gap-2">
          <img className="bg-green-200  rounded p-1.5" src={Icon} alt="" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-700">
              $48,568.20
            </span>
            <span className="text-[12px] text-gray-500 ">Total Profit</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img className="bg-blue-200  rounded p-1.5" src={Icon_1} alt="" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-700">
              $38,453.25
            </span>
            <span className="text-[12px] text-gray-500 ">Total Income</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="backdrop-contrast-50 backdrop-brightness-50 bg-white/30 rounded p-1.5"
            src={Icon_2}
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-700">
              $2,453.45
            </span>
            <span className="text-[12px] text-gray-500 ">Total Expense</span>
          </div>
        </div>

        <button className="text-center uppercase w-full rounded text-white bg-blue-600 py-1 px-1">
          View Report
        </button>
      </div>
    </div>
  );
};

export default BalanceReport;
