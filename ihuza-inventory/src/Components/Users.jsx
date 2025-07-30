import React from 'react'
import { useTheme } from '../hooks/useThemes'
import { LuUser } from "react-icons/lu";

export default function () {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`${theme ==="light" ?"bg-white text-gray-600":"bg-gray-800  text-white " }`}>
            <div className={`p-10 flex justify-between border ${theme ==="light" ?"border-gray-100":"border-gray-600 " } rounded-lg`}>

                <h1 className='text-3xl font-bold '>Users</h1>


                <button className={`px-5 py-3 bg-primaryColor-600  text-white border  font-bold ${theme ==="light" ?"border-gray-100":"border-gray-600 " }  rounded-lg`}> Add User</button>

            </div>
            <div className='max-sm:overflow-auto'>
                <table className={`min-w-full table-auto border rounded-lg ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white" } `}>
                    <thead class={`${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white" }`}>
                        <tr>
                            <th class="px-4 py-2 text-left">User</th>
                            <th class="px-4 py-2 text-left">Role</th>
                            <th class="px-4 py-2 text-left">Status</th>

                            <th class="px-4 py-2 text-left">Last Login</th>
                            <th class="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700">

                        <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white" } `}>
                            <td class="px-4 flex font-bold py-2">
                                 <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />

                               <div>
                                John Smith <br /> <span className='font-normal'>john.smith@ihuza.com</span>
                                </div> 
                                </td>
                            <td class="px-4 py-2 ">
                                <span className='text-purple-700 border rounded-lg bg-purple-700/20 border-purple-100/20 p-0.5'>Admin</span></td>
                            <td class="px-4 py-2">
                                <span className=' text-green-600 border rounded-lg border-green-50 p-0.5 bg-green-100'> Active</span>
                                </td>
                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                        <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white" }`}>
                            <td class="px-4 font-bold flex py-2">
                                <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                                <div>
                                    Sarah Johnson  <br /> <span className='font-normal'>sarah.j@ihuza.com</span>
                                    
                                </div>
                                

                                
                                </td>
                            <td class="px-4 py-2">
                                <span className='text-blue-600 bg-blue-600/20 border-rounded rounded-lg p-0.5 '>Manager</span></td>
                            <td class="px-4 py-2 text-pro-600">
                                <span className=' text-green-600 border rounded-lg border-green-50 p-0.5 bg-green-100'> Active</span>
                                </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                        <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white" } `}>
                            <td class="px-4  font-bold flex py-2">
                                <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                               <div>Michael Brown<br /> <span className='font-normal'>m.brown@ihuza.com</span></div>
                                
                                </td>
                            <td class="px-4 py-2">
                                <span className='border rounded-lg border-gray-50 bg-gray-200 p-0.5'>Staff</span>
                                </td>
                            <td class="px-4 py-2">
                                <span className=' text-green-600 border rounded-lg border-green-50 p-0.5 bg-green-100'> Active</span>
                               </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                          <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white " }`}>
                            <td class="px-4 font-bold flex py-2">
                                  <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                               <div>Emily Davis <br /> <span className='font-normal'>emily.d@ihuza.com</span></div>
                                
                                </td>
                            <td class="px-4 py-2">
                                <span className='border rounded-lg border-gray-50 bg-gray-200 p-0.5'>Staff</span>
                                </td>
                            <td class="px-4 py-2 text-green-600">
                                <span className=' text-red-900 border rounded-lg border-green-50 p-0.5 bg-red-100'> Inactive</span>
                                </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white " }`}>
                            <td class="px-4 py-2 font-bold flex">
                                <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                                <div>David Wilson  <br /> <span className='font-normal'>d.wilson@ihuza.com</span></div>
                                </td>
                            <td class="px-4 py-2">
                                <span className='border rounded-lg border-gray-50 bg-gray-200 p-0.5'>Staff</span>
                                </td>
                            <td class="px-4 py-2 text-green-600">
                                <span className=' text-green-600 border rounded-lg border-green-50 p-0.5 bg-green-100'> Active</span>
                                </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white " }`}>
                            <td class="px-4 flex font-bold py-2">
                                 <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                                <div>Lisa Anderson <br /> <span className='font-normal'>lisa.a@ihuza.com</span></div>
                              </td>
                            <td class="px-4 py-2">'
                                <span className='text-purple-700 border rounded-lg bg-purple-700/20 border-purple-100/20 p-0.5'>Admin</span>
                                </td>
                            <td class="px-4 py-2 text-green-600">
                                <span className=' text-green-600 border rounded-lg border-green-50 p-0.5 bg-green-100'> Active</span>
                                </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white " } `}>
                            <td class="px-4 font-bold flex py-2">
                                <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                                <div>Robert Taylor<br /> <span className='font-normal'>r.taylor@ihuza.com</span></div>
                                </td>
                            <td class="px-4 py-2">
                                <span className='border rounded-lg border-gray-50 bg-gray-200 p-0.5'>Staff</span>
                                </td>
                            <td class="px-4 py-2 text-green-600">
                               <span className=' text-green-600 border rounded-lg border-green-50 p-0.5 bg-green-100'> Active</span>
                                </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white " }`}>
                            <td class="px-4 font-bold flex py-2">
                                 <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                               <div>Jennifer Miller <br /> <span className='font-normal'>j.miller@ihuza.com</span></div>
                                </td>
                            <td class="px-4 py-2">
                                <span className='border rounded-lg border-gray-50 bg-gray-200 p-0.5'>Staff</span>
                                </td>
                            <td class="px-4 py-2 text-green-600 ">
                                <span className=' text-green-600 border rounded-lg border-green-50 p-0.5 bg-green-100'> Active</span>
                                </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white" } `}>
                            <td class="px-4 font-bold flex py-2">
                                <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                                <div>Christopher Lee  <br /> <span className='font-normal'>c.lee@ihuza.com</span></div>
                                </td>
                            <td class="px-4 py-2">
                                <span className='text-purple-700 border rounded-lg bg-purple-100 border-purple-100 p-0.5'>Admin</span>
                                </td>
                            <td class="px-4 py-2 text-green-600">
                                <span className=' text-green-600 border rounded-lg border-green-50 p-0.5 bg-green-100'> Active</span>
                                </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class={`border-t ${theme ==="light" ?"border-gray-100 text-gray-600":"border-gray-600 text-white" }`}>
                            <td class="px-4 flex font-bold py-2">
                                <LuUser size={40} className={`border text-sm rounded-full ${theme ==="light" ?"border-gray-100 bg-gray-200 text-gray-600":"border-gray-600 bg-gray-700 text-white"}` }  />
                               <div>Amanda White  <br /> <span className='font-normal'>a.white@ihuza.com </span></div> 
                               </td>
                            <td class="px-4 py-2">
                                <span className='border rounded-lg border-gray-50 bg-gray-200 p-0.5'>Staff</span>
                                </td>
                            <td class="px-4 py-2 text-green-600">
                                <span className=' text-red-900 border rounded-lg border-green-50 p-0.5 bg-red-200'> Inactive</span>
                                </td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 p-5 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}
