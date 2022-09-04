import { motion } from 'framer-motion'
import React from 'react'

const Skeletion = () => {
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: '100%'  }} exit={{ width: window.innerWidth }}>
                 <div className=' flex animate-pulse justify-center'>
                <div class="max-w-xxl border duration-500 hover:scale-105 bg-slate-300 hover:bg-slate-200 hover:transition duration-700 ease-in-out m-4 rounded-xl overflow-hidden shadow-slate-900 shadow-lg hover:shadow-md">

                    <div class="px-10 py-4 h-auto flex">
                        <div>
                            <img className='rounded-full opacity-50 mt-10 mb-10 mx-16 h-25 w-40' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt="" />
                        </div>

                        <div class="font-bold mx-3 text-xl">
                            <div className='pt-3 text-slate-400'>

                                Loading...
                            </div>

                            <div className='my-3'>
                                <div className=' overflow-y-scroll'>
                                    <p class="text-gray-700 max-w-xl p-10 text-xs" style={{}} >
                                            ...
                                    </p>
                                </div>
                                <div className='mt-5'>
                                <span className='capitalize text-lg text-slate-400'>total subscribers</span>
                                <span className='px-3 h-10 py-0 text-xl  text-slate-400'>Loading..</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="px-6 flex justify-end pb-2">
                        
                            <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-6 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Profile</span>
                        
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-2 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Promotion</span>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-5 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Donate</span>
                    </div> */}
                </div>
            </div>
        </motion.div>
    )
}

export default Skeletion