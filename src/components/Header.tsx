import React from "react"
import { BiWrench, BiUser, BiMenu } from "react-icons/bi";

type Props = {
  toggleIsOpenSidebar: () => void
}

const Header: React.VFC<Props> = (props) => {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
        <div className="flex items-center">
          <button onClick={() => props.toggleIsOpenSidebar()}>
            <BiMenu className="border border-gray-500 rounded text-gray-500 h-7 w-7 p-1 mr-3" />
          </button>
          <span className="text-gray-500 text-2xl mx-2 font-semibold">React Admin</span>
          <BiWrench className="h-7 w-7 text-gray-500" />
        </div>

        <div className="flex items-center">
          <div className="relative">
            <button className="relative block h-8 w-8 rounded-full overflow-hidden border border-gray-300 shadow focus:outline-none">
              <BiUser className="text-gray-500 h-full w-full object-cover" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
