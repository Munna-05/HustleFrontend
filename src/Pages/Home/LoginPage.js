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
    }else{
     
    }

 },[])
  return (
    <motion.div className='bg-no-repeat bg-gradient-to-b from-blue-100  to-slate-200' >
        <Navbar />
        
      <motion.div className='mt-10'initial={{ width: 0 }} animate={{ width: '100%'  }} exit={{ x: window.innerWidth}}>

        <Login />
      </motion.div>
    </motion.div>

  )
}

export default LoginPage