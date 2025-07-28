import React from 'react';
import { FaMoon, FaCog, FaUser, FaBell } from 'react-icons/fa';
import { useTheme } from '../hooks/useThemes';

export default function Head() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`flex flex-col md:flex-row justify-between items-start border border-gray-200 md:items-center p-4 shadow-sm transition-colors duration-300 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
      
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-600 dark:text-gray-500">Welcome Back, Admin</p>
      </div>

      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-300 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <FaMoon size={18} />
          </button>

          
          <button className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-300 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <FaCog size={18} />
          </button>

          
          <button className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-300 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors relative">
            <FaBell size={18} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-600 pl-4">
          <p className="text-sm font-medium">Admin@ihuza</p>
          <button className="p-2 rounded-full bg-primaryColor-500 border border-gray-300 text-white hover:bg-primaryColor-600 transition-colors">
            <FaUser size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
