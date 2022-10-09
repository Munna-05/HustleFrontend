import React from 'react'
import UserProfileDetails from '../../components/UserProfileDetails'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'

const UserProfile = () => {
    const { userid } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const { user } = useSelector((state) => ({ ...state.user }))
    const color ='invert'


    useEffect(() => {
        if (userid!=="null") {

            axios.get(`http://localhost:5001/auth/userDetails/${userid}`).then((response) => {
                console.log("response details", response)
                setName(response.data.name)
                setEmail(response.data.email)
                setDescription(response.data.about)
               


            })
        }else{

        }


    }, [])



    return (
        <motion.div >
            <div className='fixed w-screen z-10 '>< Navbar invert={color}/></div>
            <UserProfileDetails name={name} email={email} id={userid}  description={description} />
        </motion.div>
    )
}

export default UserProfile