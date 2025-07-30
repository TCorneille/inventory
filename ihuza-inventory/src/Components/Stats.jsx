import React from 'react'
import { LuUsers } from "react-icons/lu";
import { FaDiceD6 } from 'react-icons/fa';
import { SiTicktick } from "react-icons/si";
import { IoWarningOutline } from "react-icons/io5";
import { useTheme } from '../hooks/useThemes';

export default function Stats() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`flex flex-wrap justify-between gap-4 p-6 w-full ${theme ==="light" ?"bg-white":"bg-gray-800 text-white " }`}>
            <div className={`flex-1 min-w-[200px]  p-6 rounded-lg shadow-sm flex items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white " }`}>
                <div className='p-3 bg-blue-50 rounded-full'>
                    <LuUsers className='text-primaryColor-600 text-xl' />
                </div>
                <div>
                     <p className='text-2xl  font-semibold'>116</p>
                    <p className=' text-sm'>Total Users</p>
                   
                </div>
            </div>
            
            <div className={`flex-1 min-w-[200px]  p-6 rounded-lg shadow-sm flex items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white " }`}>
                <div className='p-3 bg-purple-50 rounded-full'>
                    <FaDiceD6 className='text-primaryColor-600 text-xl' />
                </div>
                <div>
                     <p className='text-2xl  font-semibold'>100</p>
                    <p className=' text-sm'>Total Products</p>
                   
                </div>
            </div>
            
            <div className={`flex-1 min-w-[200px]  p-6 rounded-lg shadow-sm flex items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white " }`}>
                <div className='p-3 bg-green-50 rounded-full'>
                    <SiTicktick className='text-green-600 text-xl' />
                </div>
                <div>
                    <p className='text-2xl font-semibold'>10</p>
                    <p className=' text-sm'>Assigned Products</p>
                    
                </div>
            </div>
            
            <div className={`flex-1 min-w-[200px]  p-6 rounded-lg shadow-sm flex items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white " }`}>
                <div className='p-3 bg-yellow-50 rounded-full'>
                    <IoWarningOutline className='text-yellow-600 text-xl' />
                </div>
                <div>
                    <p className='text-2xl  font-semibold'>90</p>
                    <p className=' text-sm'>Unassigned Products</p>
                    
                </div>
            </div>
        </div>
    )
}