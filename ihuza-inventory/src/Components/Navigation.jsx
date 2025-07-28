import React from 'react'
import { FaDiceD6 } from 'react-icons/fa'
import { useTheme } from '../hooks/useThemes';


export default function Navigation() {
    const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className={`flex flex-col h-fit  text-black-600 border border-gray-200 space-y-3 w-60 ${theme ==="light" ?"bg-white":"bg-gray-600"}`}>
      <div className='px-3 py-2 flex flex-col-2'>
        <div className='text-white bg-primaryColor-600 flex justify-center p-2 items-center rounded-lg'>
        <FaDiceD6 size={40} />
        </div> 
        <h1 className=''><span className='text-2xl font-bold'>iHUZA</span> <br />INVENTORY</h1>
      </div>
      <a
        href="#dashboard"
        className='px-3 py-2 rounded hover:bg-primaryColor-50 transition-colors  hover:text-primaryColor-600 duration-200'
      >
        Dashboard
      </a>
      <a
        href="#users"
        className='px-3 py-2 rounded hover:bg-primaryColor-50   hover:text-primaryColor-600 transition-colors duration-200'
      >
        Users
        1     </a>
      <a
        href="#products"
        className='px-3 py-2 rounded hover:bg-primaryColor-50 hover:text-primaryColor-600  transition-colors duration-200'
      >
        Products
      </a>
      <a
        href="#assignments"
        className='px-3 py-2 rounded  hover:bg-primaryColor-50 hover:text-primaryColor-600 transition-colors duration-200'
      >
        Assignments
      </a>
      <a
        href="#categories"
        className='px-3 py-2 h rounded hover:bg-primaryColor-50 hover:text-primaryColor-600 transition-colors duration-200'
      >
        Categories
      </a>
      <button className=' px-3  py-60 text-start hover:bg-primaryColor-50  flex flex-col '> Log out</button>
    </nav>
  )
}