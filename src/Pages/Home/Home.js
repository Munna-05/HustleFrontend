import React, { useState } from 'react'
import '../../App.css'
import '../../components/Card.css'
import Navbar from '../../components/Navbar';
import { Card } from '../../components/Card';
import { MdCard } from '../../components/MdCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Skeletion from '../../components/Skeletion';
import { motion } from 'framer-motion';

const Home = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [subs, setSubs] = useState('')
    const [dp, setDp] = useState('')
    const [id, setUserId] = useState('')
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const [skeleton, setSkeleton] = useState(true)
    const youtubeApiKey = 'AIzaSyC87sI8sEK3S7YP9smCG1EhWihdUh4fJCs'
    const url = 'https://www.googleapis.com/youtube/v3'
    useEffect(() => {
        axios.get("https://hustbackend.herokuapp.com/auth/youtube").then((response) => {
            console.log(response.data)
            const array = response.data
            // console.log(response.data[1])

        setTimeout(() => {
            setSkeleton(false)
        }, 1500);
        if (response.data[0].channelTitle === "") {
            
        } else {
            setData(array)
            setSkeleton(true)
            setName(response.data[0].channelTitle)
            setDesc(response.data[0].channelDescription)
            setSubs(response.data[0].subscriberCount)
            setDp(response.data[0].dp)
            setUserId(response.data[0]._id)
        }
         
        }, [])

        //    let user = localStorage.getItem("token")
        //    if(!user){
        //     navigate('/login')
        //    }

    }, [name, desc, subs])


    return (
        <motion.div className='h-full' style={{ backgroundrepeat: 'no-repeat' }} initial={{ width: 0 }} animate={{ width: '100%'  }} exit={{ x: window.innerWidth }}>
            <motion.div className=''initial={{ opacity: 0 }} animate={{ opacity: 1 , duration:'0.5s' }} exit={{ opacity: 0 }}>
                <Navbar />
            </motion.div>
            <motion.div className=''initial={{ width: 0 ,duration:'1s'}} animate={{ width: '100%' , duration:'2s' }} exit={{ x: window.innerWidth ,duration:'1s'}}>

            </motion.div>
            <motion.div className='mt-10' initial={{ width: 0 ,duration:'1s'}} animate={{ width: '100%' , duration:'2s' }} exit={{ x: window.innerWidth ,duration:'1s'}}>
                {data.slice(0, 1).map((details) => {
                    return (

                        <div className='duration-500'>
                            {skeleton ? <Skeletion /> : <Card name={details.channelTitle} subs={details.subscriberCount} description={details.channelDescription} dp={details.dp} id={details.userId} />}
                        </div>
                    )

                })}
                <div className='grid grid-cols-2'>
                    {data.slice(1, 3).map((detail) => {
                        return (
                            <div className='duration-500'>
                                {skeleton ? <Skeletion /> : <MdCard name={detail.channelTitle} subs={detail.subscriberCount} description={detail.channelDescription} dp={detail.dp} id={detail.userId} />}

                            </div>

                        )
                    })}
                </div>
                <div className='grid grid-cols-3 gap-0'>
                    {data.slice(3).map((detail) => {
                        return (
                            <div className='duration-500'>
                                {skeleton ? <Skeletion /> : <MdCard name={detail.channelTitle} subs={detail.subscriberCount} description={detail.channelDescription} dp={detail.dp} id={detail.userId} />}

                            </div>

                        )
                    })}
                </div>
            </motion.div>



            {/* <Skeletion/> */}







        </motion.div>
    )
}

export default Home