import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import AdminUserTable from './AdminUserTable'
import AdminChannelDetails from './AdminChannelDetails'

import { Card } from './Card'
import { useState } from 'react'

const AdminDash = () => {
    const [user, setUser] = useState(true)
    const [channel, setChannel] = useState(false)
    const [userDetails,setuserDetails]=useState([])
    const [channelDetails,setChannelDetails]=useState([])
    const changeState = () => {
        console.log("user", user)
        console.log('channel', channel)
        setUser(!user)

    }
    useEffect(() => {
        axios.get('http://localhost:5001/auth/adminDash').then((response) => {
            console.log(response)
            console.log(response.data.channel)
            // console.lof(response.data.user)
            setuserDetails( response.data.user)
            setChannelDetails(response.data.channel)
           
        })
    },[])
    return (
        <div className='' >
            <div className='h-20 '></div>

            <div className='justify-center flex'>
                {user ?
                    <button onClick={changeState} className='bg-slate-300 p-2 px-4 rounded-xl shadow shadow-slate-600 shadow-md hover:bg-blue-500 hover:text-white'>View Channels</button>
                    :

                    <button onClick={changeState} className='bg-slate-300 p-2 px-4 mx-3 rounded-xl shadow shadow-slate-600 shadow-md hover:bg-blue-500 hover:text-white'>View Users</button>
                }
            </div>
            <div className=' border-black bg-slate-300 mx-auto mt-9 rounded py-3 px-3 container'>
               
                {user ? <AdminUserTable data={userDetails}/> :<AdminChannelDetails data={channelDetails}/>}
                

            </div>



        </div>
    )
}

export default AdminDash