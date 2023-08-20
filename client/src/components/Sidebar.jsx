import { useState } from "react";
import { Logo, addIcon } from "../assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <aside
      className={`fixed border-r-2 top-0 left-0 z-40 w-64 h-screen transition-transform ${
        toggle && "-translate-x-full"
      } sm:translate-x-0`}
    >
      <button
        type="button"
        className="inline-flex absolute -right-8 top-12 items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setToggle((o) => !o)}
      >
        <span className="sr-only">Open sidebar</span>
        {toggle ? (
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-red-600 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <line
              x1="2"
              y1="2"
              x2="18"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="2"
              y1="18"
              x2="18"
              y2="2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <img className="mx-auto my-3 " src={Logo} alt="" />
        <ul className="space-y-2 mt-8 font-medium border-t border-gray-200 dark:border-gray-700">
          <div className="text-gray-600 font-normal dark:text-white flex justify-between">
            <span>BUSINESS</span>
            <img src={addIcon} alt="" />
          </div>
          <li>
            <NavLink
              to="dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 stroke-gray-800 text-white dark:text-gray-400 group-hover:text-white  transition duration-75   group-hover:stroke-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 11.5L12.3 15.7L10.7 13.3L7.5 16.5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 11.5H16.5V13.5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="stock"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 stroke-gray-800 text-white dark:text-gray-400 group-hover:text-white  transition duration-75   group-hover:stroke-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.88 18.1501V16.0801"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 18.1498V14.0098"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17.12 18.1502V11.9302"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17.12 5.8501L16.66 6.3901C14.11 9.3701 10.69 11.4801 6.88 12.4301"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14.19 5.8501H17.12V8.7701"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Stock</span>
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 stroke-gray-800 text-white dark:text-gray-400 group-hover:text-white  transition duration-75   group-hover:stroke-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.02 2.2C13.36 2.07 12.69 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 11.32 21.93 10.65 21.8 10.01"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Notification
              </span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <div className="text-gray-600 font-normal  dark:text-white flex justify-between">
            <span>SETTING</span>
          </div>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 stroke-gray-800 text-white dark:text-gray-400 group-hover:text-white  transition duration-75   group-hover:stroke-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-3">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 stroke-gray-800 text-white dark:text-gray-400 group-hover:text-white  transition duration-75   group-hover:stroke-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.10986V14.8799C3 16.9999 3 16.9999 5 18.3499L10.5 21.5299C11.33 22.0099 12.68 22.0099 13.5 21.5299L19 18.3499C21 16.9999 21 16.9999 21 14.8899V9.10986C21 6.99986 21 6.99986 19 5.64986L13.5 2.46986C12.68 1.98986 11.33 1.98986 10.5 2.46986L5 5.64986C3 6.99986 3 6.99986 3 9.10986Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 stroke-gray-800 text-white dark:text-gray-400 group-hover:text-white  transition duration-75   group-hover:stroke-blue-500"
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
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
