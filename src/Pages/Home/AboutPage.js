import React from 'react'
import Navbar from '../../components/Navbar'
import './about.css'
import {motion} from 'framer-motion'

export const AboutPage = () => {
    return (
        <motion.div className='height bg-no-repeat bg-gradient-to-b from-blue-100  to-slate-200' initial={{ width: 0 }} animate={{ width: '100%'  }} exit={{ x: window.innerWidth }}>
            <div className=''>
                <Navbar />
            </div>
            <div className='h-40 '></div>

            <div className="flex justify-center">
                   
                
            <div className=' bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300  flex p-5 grid-rows-1 p-12 rounded-lg shadow shadow-slate-500 shadow-lg w-1/2 text-center  '>
                   <div className=''>
                  We are introducing a new Social Media platform exclusively for the Youtube Content Creators.Here you can Sign up and get a insight about you and 
                  your fellow content creators and their work so you can see how many of them are <span className='text-bold font-bold uppercase mx-1'>Hustling</span> to 
                  outrun others, We also provide many more services like collaborations with other youtubers and Donations.
                   </div>
            </div>
            </div>
          
        </motion.div>
    )
}

