import React from 'react'
import ChatBox from '../../components/ChatBox'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


export const Messenger = () => {
    const [data, setData] = useState('')
    const  [user,setUser] = useState('')
    
    useEffect(() => {
       

       
    })
    return (
        <div>
            <ChatBox chat={data.data}>

            </ChatBox>


        </div>
    )
}



