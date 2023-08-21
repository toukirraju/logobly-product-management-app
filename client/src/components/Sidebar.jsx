import { useState } from "react";
import { Logo } from "../assets";
import SidebarList from "./SidebarList";
import sidebarData from "../utils/sidebarData";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const { business, settings } = sidebarData();

  return (
    <aside
      className={`fixed border-r-2 top-0 left-0 z-40 w-64 h-screen transition-transform ${
        toggle && "-translate-x-full"
      } sm:translate-x-0`}
    >
      <button
        type="button"
        className="inline-flex absolute -right-8 top-12 items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 active:bg-gray-200 dark:focus:ring-gray-600"
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
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
        <img className="mx-auto my-3 " src={Logo} alt="" />

        <SidebarList listTitle="business" data={business} />
        <SidebarList listTitle="SETTING" data={settings} />
      </div>
    </aside>
  );
};

export default Sidebar;
