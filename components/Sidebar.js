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
        className={`bg-gray-sidebar fixed md:static w-36 md:w-[16%] xl:w-[16%] 2xl:w-[10%] transition-all z-50 duration-300 ${
          showMenu ? "left-0 h-full md:h-screen" : "-left-full"
        }`}>
        <div className=''>
          <Link href='/'>
            <div className='flex items-center justify-center md:px-4 py-3 mb-8 md:mb-6'>
              <Image
                src='/witailer.svg'
                alt='logo witailer'
                width={80}
                height={50}
                className='mt-4 xl:w-32'
              />
            </div>
          </Link>
          <div className='flex justify-center mb-2'>
            <Image
              className='rounded-full ring-2 ring-[#e6e5e8] mb-2 xl:mb-3 xl:w-20'
              src='/avatar.png'
              priority={true}
              alt='img'
              width={60}
              height={60}
            />
          </div>
          <div className='text-center text-white '>
            <p className='text-md font-semibold mb-2'>Josè Faraz</p>
            <div className='flex justify-center'>
              <p className='bg-cyan-500 text-xs p-1 px-3 rounded-full mb-10 shadow-2xl'>
                Pro level
              </p>
            </div>
          </div>
          <Link href='/dashboard'>
            <div className='flex items-center justify-center  md:px-4 py-3 hover:md:bg-cyan-500 hover:md:rounded-md'>
              <div className='pr-3 md:pr-0 lg:pr-3'>
                <IoStatsChartSharp className='text-white w-5 h-5 lg:w-4 lg:h-4' />
              </div>
              <p className='hidden lg:block text-white text-sm'>Dashboard</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Button mobile - actions the lateral sidebar slide */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className='btn-primary md:hidden fixed right-4 bottom-4 text-2xl p-2.5 rounded-full z-50'>
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
}

export default Sidebar;
