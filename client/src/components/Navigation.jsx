import { useSelector } from "react-redux";
import { profileImg } from "../assets";

const Navigation = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex h-[60px] items-center justify-between py-3 px-3 border-black border-b-2 bg-gray-50 w-full">
      <h3 className="text-[18px] font-semibold md:text-[30px] text-gray-700">
        {user.isAdmin ? "Admin Dashboard" : "User Dashboard"}
      </h3>
      <div className="flex items-center gap-2">
        <div>
          <img src={profileImg} alt="" />
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-bold ">{user?.name}</span>
          <span className="text-[12px] text-gray-500">{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
