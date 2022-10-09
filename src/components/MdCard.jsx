import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export const MdCard = (props) => {
    const subs = parseInt(props.subs)
    const token = localStorage.getItem('token')
   
   
    return (
        <div>
            <motion.div className='row flex px-0 justify-center' initial={{ opacity: 0 }} transition={{ delay: 0.7 }} animate={{ opacity: 1  }} exit={{ opacity:0 }}>
                <div class="container border duration-500  hover:scale-105 bg-gradient-to-r from-slate-300 to-slate-100 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 hover:transition hover:duration-500 ease-in-out m-5 rounded-xl overflow-hidden shadow-slate-900 shadow-lg hover:shadow-md">

                    <div class="px-6 py-4 flex justify-center">
                        <div>
                            <img className='rounded-full mt-5 h-25 w-40' src={props.dp} alt="" />
                        </div>

                        <div class="font-bold mx-3 overflow-x-scroll text-xl ">
                            <div className='py-3  mx-auto '>

                                {props.name}
                            </div>

                            <div className='my-1 '>
                                <p class="text-gray-700 max-w-sm px-3 h-20 overflow-y-scroll text-xs">
                                    {props.description}
                                    </p>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <span className='capitalize text-lg'>total subscribers</span><p className='text-lg mx-4 text-red-700'> {subs.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    {token?

                    <div class=" text-xs flex justify-end pt-2 px-3 pb-2">
                        <Link to={`/profile/${props.id}`}>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Profile</span>
                        </Link>
                        {/* <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Promotion</span> */}
                        {/* <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Donate</span> */}
                    </div>
                    : <div class="px-6 flex justify-end pb-2">
                    <Link to='/login'>
                            <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-6 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">View</span>
                        </Link>
                    </div>
                    }
                </div>
            </motion.div>
        </div>
    )
}
