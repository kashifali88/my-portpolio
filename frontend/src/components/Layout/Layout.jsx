import  { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Menus from "./Menus";

const Layout = ({children}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Mobile Overlay */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setToggle(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`
          h-screen
          fixed lg:relative
          top-0 left-0
          h-screen
          bg-gray-900
          text-white
          shadow-2xl 
          z-50
          transition-all
          duration-500
          ease-in-out
          overflow-hidden
          ${
            toggle
              ? "translate-x-0 w-64"
              : "-translate-x-full lg:translate-x-0 lg:w-20"
          }
        `}
      >

        {/* Desktop Toggle Button */}
        <div className="hidden lg:flex justify-end p-3">
          {toggle ? (
            <IoClose
              size={22}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => setToggle(false)}
            />
          ) : (
            <FaBars
              size={20}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => setToggle(true)}
            />
          )}
        </div>

        {/* Mobile Close Button */}
        <div className="flex justify-end p-4 lg:hidden">
          <IoClose
            size={28}
            className="cursor-pointer"
            onClick={() => setToggle(false)}
          />
        </div>

        <Menus toggle={toggle} setToggle={setToggle} />

      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto">

        {/* Mobile Navbar */}
        <header className="sticky top-0 z-30 bg-white shadow-md px-5 py-4 flex items-center lg:hidden">

          <FaBars
            size={22}
            className="cursor-pointer"
            onClick={() => setToggle(true)}
          />

          <h2 className="ml-4 text-xl font-bold">
            My Portfolio
          </h2>

        </header>

        {/* Content */}
        <div className="px-2 lg:px-4">
          {children}
        </div>

      </main>

    </div>
  );
};

export default Layout;