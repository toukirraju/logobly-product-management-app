import { profileImg } from "../assets";

const Navigation = () => {
  return (
    <div className="flex h-[60px] items-center justify-between py-3 px-3 border-black border-b-2 bg-gray-50 w-full">
      <h3 className="text-[18px] font-semibold md:text-[30px] text-gray-700">
        Admin Dashboard
      </h3>
      <div className="flex items-center gap-2">
        <div>
          <img src={profileImg} alt="" />
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-bold ">Esther Howard</span>
          <span className="text-[12px] text-gray-500">howare@property.com</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
