import React from "react"
import { BiBarChartAlt2, BiUser } from "react-icons/bi";

type Props = {
  isOpenSidebar: boolean
}

const Sidebar: React.VFC<Props> = (props) => {
  return (
    <>
      <div className={(props.isOpenSidebar ? "translate-x-0 ease-out" : "-translate-x-full ease-in") + " fixed z-30 inset-y-0 left-0 w-72 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"}>
        <nav className="mt-10">
          <div className="flex items-center px-6 py-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
            <BiBarChartAlt2 className="h-6 w-6 mr-3" />
            <span className="text-xl">DashBoard</span>
          </div>
          <div className="flex items-center px-6 py-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
            <BiUser className="h-6 w-6 mr-3" />
            <span className="text-xl">UserList</span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
