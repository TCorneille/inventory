import React from 'react'

export default function () {
    return (
        <div>
            <div className='p-10 flex justify-between border rounded-lg border-gray-100'>

                <h1 className='text-4xl font-bold text-gray-700'>Users</h1>


                <button className='px-5 py-3 bg-primaryColor-600 border  font-bold  rounded-lg'> Add User</button>

            </div>
            <div className='bg-accent-200'>
                <table class="min-w-full table-auto border border-gray-200">
                    <thead class="bg-amber-100 text-gray-800">
                        <tr>
                            <th class="px-4 py-2 text-left">User</th>
                            <th class="px-4 py-2 text-left">Role</th>
                            <th class="px-4 py-2 text-left">Status</th>

                            <th class="px-4 py-2 text-left">Last Login</th>
                            <th class="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700">

                        <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">John Smith <br /> <span>john.smith@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>
                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                        <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">Sarah Johnson  <br /> <span>sarah.j@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                        <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">Michael Brown<br /> <span>m.brown@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                          <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">Emily Davis <br /> <span>emily.d@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">David Wilson  <br /> <span>d.wilson@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">Lisa Anderson  <br /> <span>lisa.a@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">Robert Taylor<br /> <span>r.taylor@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">Jennifer Miller <br /> <span>j.miller@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">Christopher Lee  <br /> <span>c.lee@ihuza.com</span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                         <tr class="border-t border-gray-200 hover:bg-amber-50">
                            <td class="px-4 py-2">Amanda White  <br /> <span>a.white@ihuza.com </span></td>
                            <td class="px-4 py-2">Admin</td>
                            <td class="px-4 py-2 text-green-600">Active</td>

                            <td class="px-4 py-2">2025-07-27</td>
                            <td class="px-4 py-2">
                                <button class="text-blue-500 hover:underline">Edit</button>
                                <button class="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}
