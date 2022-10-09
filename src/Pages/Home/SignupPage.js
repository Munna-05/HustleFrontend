import React from 'react'
import Navbar from '../../components/Navbar'
import { Signup } from '../../components/Signup'
import { motion } from 'framer-motion'

export const SignupPage = () => {
  return (
    <motion.div className='bg-no-repeat bg-gradient-to-b from-blue-100  to-slate-200' >
        <Navbar/>
        <div className='h-10'>

        </div>
        <Signup/>

    </motion.div>
  )
}
