import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
// import io from 'socket.io-client'
const ChatBox = (props) => {
    return (
        <div >

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 0.3, transition: { delay: 0.3 } }} className='bg-slate-300 opacity-60 blur-50 flex justify-center z-0 h-screen p-10' >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1, duration: 0.3 }} className=' border rounded-lg flex justify-between  shadow shadow-slate-700 shadow-lg overflow-y-scroll bg-slate-100 p-5 absolute z-10 border-black mt-10' style={{ width: '50vw', height: '60vh' }}>
                    <div className='h-full w-screen border border-red-500'>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{
                                opacity: 1,
                                x: 0, transition: {
                                    delay: 0.3
                                }
                            }} className="  py-1 w-full grid grid-cols-2 h-fit border border-black flex text-start  "
                        >
                            <div className='rounded text-white capitalize bg-blue-400 px-3 py-1 w-fit'>hai</div>


                        </motion.div>

                    </div>


                </motion.div>

            </motion.div>
            <input type="text" className='h-fit border border-black' />





        </div>

    )
}

export default ChatBox