import React, { useState } from 'react';
import { FaMoon, FaCog, FaUser, FaBell, FaBars } from 'react-icons/fa';
import { useTheme } from '../hooks/useThemes';

export default function Head(props) {
  const { theme, toggleTheme } = useTheme();


  return (
    <header className={`flex justify-between max-sm:h-[70px] items-center gap-2`}>
      <div className='h-full sm:hidden py-2 flex items-start text-primaryColor-600'><FaBars onClick={props.menu} /></div>
      <div className={`flex  md:flex flex-10/12 justify-between items-start max-sm:items-center border md:items-center p-4 max-sm:p-0 shadow-sm transition-colors ${theme === 'light' ? 'bg-white  border-gray-200 text-gray-800' : 'bg-gray-700 border-gray-500 text-white'}`}>
        <div className="mb-4 md:mb-0 ">
          <h1 className="font-bold">Dashboard</h1>
          <p className="text-sm text-gray-600 dark:text-gray-500">Welcome Back, Admin</p>
        </div>


        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-300 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <FaMoon size={18} className='max-sm:size-2'/>
            </button>


            <button className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-300 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <FaCog size={18} className='max-sm:size-2' />
            </button>


            <button className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-300 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors relative">
              <FaBell size={18} className='max-sm:size-2' />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-600 pl-4">
            <p className="text-sm max-sm:hidden font-medium">Admin@ihuza</p>
            <button className="p-2 rounded-full bg-primaryColor-500 border border-gray-300 text-white hover:bg-primaryColor-600 transition-colors">
              <FaUser size={18} className='max-sm:size-2' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
