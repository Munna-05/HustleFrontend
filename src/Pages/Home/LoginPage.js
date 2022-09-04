import React from 'react'
import { Login } from '../../components/Login'
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const LoginPage = () => {
  const navigate=useNavigate()
  useEffect(() => {
    

    let token = localStorage.getItem("token")
    if(token){
     navigate('/')
    }

 })
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: '100%'  }} exit={{ x: window.innerWidth }}>
        <Navbar />
        <div className='h-20'>

        </div>
        <Login />
    </motion.div>

  )
}

export default LoginPage