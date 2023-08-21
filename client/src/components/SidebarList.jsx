import { Loader } from "@mantine/core";
import { useLogoutMutation } from "../redux/features/auth/authApi";
import SidebarListItem from "./SidebarListItem";

const SidebarList = ({ listTitle = "add listTitle", data = [] }) => {
  const [logout, { isLoading }] = useLogoutMutation();
  return (
    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 ">
      <div className="text-gray-600 font-normal   flex justify-between">
        <span className="uppercase">{listTitle}</span>
      </div>

      {data.map((list, index) => (
        <SidebarListItem key={index} list={list} />
      ))}

      {listTitle === "SETTING" && (
        <li>
          <span
            className="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg  hover:bg-gray-100 hover:text-red-500 dark:hover:bg-gray-200 active:bg-gray-200 group"
            onClick={() => logout()}
          >
            <svg
              className="w-5 h-5 stroke-gray-800 text-white dark:text-gray-400 group-hover:text-white  transition duration-75   group-hover:stroke-red-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 9.31982L20.06 11.8798L17.5 14.4398"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.81999 11.8799L19.99 11.8799"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4C7.58 4 4 7 4 12C4 17 7.58 20 12 20"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>

            {isLoading && <Loader color="gray" size="sm" />}
          </span>
        </li>
      )}
    </ul>
  );
};

export default SidebarList;
