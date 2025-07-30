import React from 'react'
import { FaDiceD6 } from 'react-icons/fa'
import { MdComputer } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoReorderThreeOutline } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { CiLogin } from "react-icons/ci";
import { useTheme } from '../hooks/useThemes';


export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`flex flex-col h-full max-sm:absolute max-sm:top-[70px] max-sm:w-full max-sm:left-0 max-sm:h-[60vh] text-black-600 border space-y-3  ${theme === "light" ? "bg-white  border-gray-200" : "bg-gray-700 border-gray-500 text-white"}`}>
      <div className='px-2 py-2 flex gap-2 items-center'>
        <div className='text-white bg-primaryColor-600 flex   items-center rounded-lg size-[40px] justify-center'>
          <FaDiceD6 className='w-full' />
        </div>
        <h1 className=''><span className=' font-bold'>iHUZA</span> <br /> <span className='text-sm'>INVENTORY</span></h1>
      </div>
      <a
        href="#dashboard"
        className='px-3 py-2 rounded hover:bg-primaryColor-50 transition-colors flex hover:text-primaryColor-600 duration-200'
      >
        <MdComputer size={25} />
        Dashboard
      </a>
      <a
        href="#users"
        className='px-3 py-2 rounded hover:bg-primaryColor-50 flex   hover:text-primaryColor-600 transition-colors duration-200'
      >
        <FaUserFriends size={25} />
        Users
      </a>
      <a
        href="#products"
        className='px-3 py-2 rounded hover:bg-primaryColor-50 flex hover:text-primaryColor-600  transition-colors duration-200'
      >
        <AiFillProduct size={25} />
        Products
      </a>
      <a
        href="#assignments"
        className='px-3 py-2 rounded  flex hover:bg-primaryColor-50 hover:text-primaryColor-600 transition-colors duration-200'
      >
        <IoReorderThreeOutline size={25} />
        Assignments
      </a>
      <a
        href="#categories"
        className='px-3 py-2 h rounded flex hover:bg-primaryColor-50 hover:text-primaryColor-600 transition-colors duration-200'
      >
        <SiBookstack size={25} />

        Categories
      </a>
      <button className=' px-3 mt-auto  text-start hover:bg-primaryColor-50  flex '>
        <CiLogin size={25} />
        Log out
      </button>
    </nav>
  )
}