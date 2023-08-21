import { NavLink } from "react-router-dom";

const SidebarListItem = ({ to, listLable = "list lable", icon, list }) => {
  return (
    <li>
      <NavLink
        // to={to}
        {...list}
        className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-200 active:bg-gray-200 group"
      >
        {list.icon}
        <span className="ml-3 capitalize">{list.listLable}</span>
      </NavLink>
    </li>
  );
};

export default SidebarListItem;
