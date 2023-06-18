import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiMore2Fill, RiCloseFill } from "react-icons/ri";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`bg-[#282c34] fixed md:static md:w-1/6 lg: xl:w-1/6 2xl:w-1/6  transition-all z-50 duration-300 ${
          showMenu ? "left-0 pl-3 h-full" : "-left-full"
        }`}
      >
        <Link href="/">
          <div className="flex items-center md:justify-center md:px-4 lg:justify-start py-3 mb-8 md:mb-6">
            <span className="pr-3 md:pr-0 lg:pr-4">
              <Image
                src="/witailer.svg"
                alt="logo witailer"
                width={100}
                height={50}
              />
            </span>
          </div>
        </Link>
        <div className="flex justify-center mb-2">
          <Image
            className="rounded-full ring-2 ring-[#e6e5e8] mb-2"
            src="/avatar.png"
            priority={true}
            alt="img"
            width={60}
            height={60}
          />
        </div>
        <div className="text-center text-white ">
          <p className="text-white text-md font-bold mb-2">Josè Faraz</p>
          <div className="flex justify-center">
            <p className="bg-cyan-500 text-xs p-1 px-3 rounded-full mb-10 shadow-2xl">
              Pro level
            </p>
          </div>
        </div>
        <Link href="/dashboard">
          <div className="flex items-center justify-center lg:justify-start md:px-4 py-3 hover:md:bg-cyan-500 hover:md:rounded-md">
            <span className="pr-3 md:pr-0 lg:pr-4">
              <IoStatsChartSharp className="text-white w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 " />
            </span>
            <p className="hidden lg:block text-white">Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Button mobile - actions the lateral sidebar slide */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="bg-cyan-500 md:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>

      {/* <button
        onClick={(e) => {
          e.preventDefault();
          return setShowMenu(!showMenu);
        }}
        className="bg-cyan-500 md:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button> */}
    </>
  );
}

export default Sidebar;
