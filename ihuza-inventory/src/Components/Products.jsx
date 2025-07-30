import React from 'react';
import { useTheme } from '../hooks/useThemes';

export default function Products() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`${theme ==="light" ?"bg-white":"bg-gray-800 text-white"}`}>
            <div className={`border rounded-lg ${theme ==="light" ?"bg-white  border-gray-100":"bg-gray-800 border-gray-600 text-white " } `}>
                <h1 className={`text-4xl border-b-1 text-gray-800 font-Bold px-10 py-2 ${theme ==="light" ?"bg-white  border-gray-100":"bg-gray-800 border-gray-600 text-white" } `}>Recent Added Products</h1>

                <div className={`flex flex-wrap justify-start gap-4 p-6 w-full  `}>

                    <div className={`min-sm:w-[350px] max-sm:w-full p-6 rounded-lg shadow-sm flex justify-between items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white " } `}>
                        <div className="">
                            <h2 className=' font-bold'> MacBook Pro 16"</h2>
                            <p className=''>Laptops</p>
                            <p className='text-sm'>Dec 10, 2024</p>
                        </div>
                        <div className=''>
                            <span className='text-green-800 border  rounded-lg border-white bg-green-100 p-0.5'>In stock</span>
                        </div>

                    </div>
                    <div className={`min-sm:w-[350px] max-sm:w-full p-6 rounded-lg shadow-sm flex justify-between items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white" }`}>
                        <div>
                            <h2 className='font-bold'>iPad Air</h2>
                            <p className=''>Tablets</p>
                            <p className='text-sm'> Dec 7, 2024</p>
                        </div>
                        <div>
                            <span className='text-green-800 border rounded-lg border-white bg-green-100 p-0.5'>In stock</span>
                        </div>
                    </div>
                    <div className={`min-sm:w-[350px] max-sm:w-full p-6 rounded-lg shadow-sm flex justify-between items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white" } `}>
                        <div>
                            <h2 className=' font-bold'> Dell XPS 13</h2>
                            <p className=''>Laptops</p>
                            <p className='text-sm'> Dec 9, 2024</p>
                        </div>
                        <div>
                            <span className='text-green-800 border rounded-lg border-white bg-green-100 p-0.5'>In stock</span>
                        </div>
                    </div>
                     <div className={`min-sm:w-[350px] max-sm:w-full  p-6 rounded-lg shadow-sm flex  justify-between items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white" }`}>
                        <div>
                            <h2 className=' font-bold'>  Surface Pro 9</h2>
                            <p className=''>Tablets</p>
                            <p className=' text-sm'> Dec 6,2024</p>
                        </div>
                        <div>
                            <span className='text-red-950 border rounded-lg border-white p-0.5 bg-red-100'>Out of stock</span>
                        </div>
                    </div>
                    <div className={`min-sm:w-[350px]  max-sm:w-full p-6 rounded-lg shadow-sm flex justify-between items-center gap-4 ${theme ==="light" ?"bg-white text-gray-600":"bg-gray-600 text-white" }`}>
                        <div>
                            <h2 className=' font-bold'>iPhone 15 Pro</h2>
                            <p className=''>Mobile</p>
                            <p className=' text-sm'> Dec 8,2024</p>
                        </div>
                        <div>
                            <span className='text-red-950 border rounded-lg border-white bg-yellow-100'>Low on Stock</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
