import React from 'react'

export default function Products() {
    return (
        <div>
            <div className='border rounded-lg border-gray-100'>
                <h1 className='text-4xl border-b-1 border-gray-100 text-gray-800 font-Bold px-10 py-2'>Recent Added Products</h1>

                <div className='flex flex-wrap justify-start gap-4 p-6 w-full'>

                    <div className=' min-w-[350px] bg-white p-6 rounded-lg shadow-sm flex justify-between items-center gap-4'>
                        <div>
                            <h2 className='text-gray-600 font-bold'> MacBook Pro 16"</h2>
                            <p className='text-gray-600'>Laptops</p>
                            <p className='text-gray-500 text-sm'>Dec 10, 2024</p>
                        </div>
                        <div className=''>
                            <span className='text-green-800 border  rounded-lg border-white bg-green-100'>In stock</span>
                        </div>

                    </div>
                    <div className=' min-w-[350px] bg-white p-6 rounded-lg shadow-sm flex justify-between items-center gap-4'>
                        <div>
                            <h2 className='text-gray-600 font-bold'>iPad Air</h2>
                            <p className='text-gray-600'>Tablets</p>
                            <p className='text-gray-500 text-sm'> Dec 7, 2024</p>
                        </div>
                        <div>
                            <span className='text-green-800 border rounded-lg border-white bg-green-100'>In stock</span>
                        </div>
                    </div>
                    <div className=' min-w-[350px] bg-white p-6 rounded-lg shadow-sm flex justify-between items-center gap-4'>
                        <div>
                            <h2 className='text-gray-600 font-bold'> Dell XPS 13</h2>
                            <p className='text-gray-600'>Laptops</p>
                            <p className='text-gray-500 text-sm'> Dec 9, 2024</p>
                        </div>
                        <div>
                            <span className='text-green-800 border rounded-lg border-white bg-green-100'>In stock</span>
                        </div>
                    </div>
                     <div className=' min-w-[350px] bg-white p-6 rounded-lg shadow-sm flex  justify-between items-center gap-4'>
                        <div>
                            <h2 className='text-gray-600 font-bold'>  Surface Pro 9</h2>
                            <p className='text-gray-600'>Tablets</p>
                            <p className='text-gray-500 text-sm'> Dec 6,2024</p>
                        </div>
                        <div>
                            <span className='text-red-950 border rounded-lg border-white bg-red-100'>Out of stock</span>
                        </div>
                    </div>
                    <div className=' min-w-[350px] bg-white p-6 rounded-lg shadow-sm flex justify-between items-center gap-4'>
                        <div>
                            <h2 className='text-gray-600 font-bold'>iPhone 15 Pro</h2>
                            <p className='text-gray-600'>Mobile</p>
                            <p className='text-gray-500 text-sm'> Dec 8,2024</p>
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
