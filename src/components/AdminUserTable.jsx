import React, { useEffect } from 'react'
import axios from 'axios'

const AdminUserTable = (props) => {
    const blockUser = () => {
        alert('user blocked')
    }

    return (

        <div>
            <div className='h-screen'>
                <h1 className='bg-slate-600 mx-auto rounded text-white m-3 w-60'>User Management</h1>
                <table class="table border border-black container">
                    <thead>
                        <tr className='border border-black'>
                            <th className='border border-black'>id</th>
                            <th className='border border-black'>Name</th>
                            <th className='border border-black'>Email Address</th>
                            <th className='border border-black'>Block/Unblock</th>
                            <th className='border border-black'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((details) => {

                            return (
                                <>
                                    <tr>

                                        <td className='border border-black px-3'>{details._id}</td>
                                        <td className='border border-black px-3'>{details.name}</td>
                                        <td className='border border-black px-3'>{details.email}</td>

                                        <td className='border border-black'>

                                            <button onClick={blockUser(details.id)} className='bg-red-500 p-1 px-3 my-2 rounded-full text-red-100 hover:bg-red-600 duration-300'>Block</button>
                                        </td>

                                    </tr>
                                </>
                            )
                        })}




                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminUserTable