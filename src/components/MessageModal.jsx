import React from "react";
import { motion } from 'framer-motion'
import axios from "axios";
import { useEffect } from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
   
    
   
    return (
        <>
            <button
                className=" text-white  font-bold uppercase text-sm  rounded  hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Connect
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center  bg-black bg-opacity-60 fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 0.3, transition: { delay: 0.3 } }}  exit={{opacity:0, transition:{delay:0.3}}} className='bg-slate-300 opacity-60 blur-50 flex justify-center z-0 ' style={{marginTop:'20vh'}} >
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1, duration: 0.3 }}  exit={{opacity:0, transition:{delay:0.3}}} className=' border rounded-lg shadow shadow-slate-700 shadow-lg overflow-y-scroll bg-slate-100 p-5 absolute z-10 border-black' style={{ width: '50vw', height: '60vh' }}>
                                    <motion.div animate={{opacity:1}} exit={{opacity:0 ,transition:{delay:0.3}}} className=" flex justify-end px-4 text-red-500 ">
                                        <button className="border px-2 py-1 rounded-full " onClick={()=>setShowModal(!showModal)}>X</button>
                                    </motion.div>
                                    <motion.div
                                        initial={{ x: 100, opacity: 0 }} 
                                        animate={{
                                            opacity: 1,
                                            x: 0, transition: {
                                                delay: 0.3
                                            }
                                           
                                        }}
                                        exit={{opacity:0,transition:{delay:0.3}}} className="flex px-3 py-1 w-40 rounded text-white capitalize bg-blue-400"
                                    >
                                        message
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>


                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}