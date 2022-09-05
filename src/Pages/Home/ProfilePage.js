import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Profile } from '../../components/Profile'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageSkeleton from '../../components/PageSkeleton'


export const ProfilePage = () => {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [subs, setSubs] = useState('')
    const [userid,setUserid] = useState('')
    const [skeleton,setSkeleton]=useState(true)
    const [dp,setDp] = useState('')
    const [channel_id,setChannel_id]=useState('')
    const [videos,setVideos]=useState([])

    useEffect(()=>{
        console.log(id)
      
        axios.get(`http://localhost:5001/auth/profile/${id}`).then((response)=>{
            console.log(response)
            
        
        setTimeout(() => {
            setSkeleton(false)
        },1500);
        if(response.data.channelTitle==""){

        }else{
            setSkeleton(true)
            setChannel_id(response.data.profileDetails.channelId)
            setName(response.data.profileDetails.channelTitle)
            setDesc(response.data.profileDetails.channelDescription)
            setSubs(response.data.profileDetails.subscriberCount)
            setDp(response.data.profileDetails.dp)
            setUserid(response.data.profileDetails.userId)
            setVideos(response.data.videos.videos)
        }
    },[])
    },[name,desc,subs])
  return (

    <motion.div className='h-screen bg-slate-300' initial={{ width: 0 }} animate={{ width: '100%'  }} exit={{ x: window.innerWidth }}>
        <div className='fixed z-10 '>< Navbar/></div>
       
        <div className=''>
            {skeleton?<div className=''><PageSkeleton/></div>:
            <Profile title={name} description={desc} subscribers={subs} dp={dp} channelId={channel_id} videos={videos} userid={userid}/>
  }
        </div>



    </motion.div>
  )
}

