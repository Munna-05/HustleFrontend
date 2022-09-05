import React from 'react'
import Navbar from '../../components/Navbar'
import { Signup } from '../../components/Signup'
import { motion } from 'framer-motion'

export const SignupPage = () => {
  return (
    <motion.div initial={{ width: 0 }} className='bg-gradient-to-b from-blue-100 to-blue-200' animate={{ width: '100%'  }} exit={{ x: window.innerWidth }}>
        <Navbar/>
        <div className='h-10'>

        </div>
        <Signup/>

    </motion.div>
  )
}
