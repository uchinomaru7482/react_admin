function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
        <div className="flex items-center">
          <button className="text-gray-500 focus:outline-none lg:hidden">
            React Admin
          </button>
          <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              Icon
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button className="relative block h-8 w-8 rounded-full overflow-hidden border border-gray-300 shadow focus:outline-none">
              icon image
            </button>
            {/* <div v-if="isOpenMenu" className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
              Signout
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
