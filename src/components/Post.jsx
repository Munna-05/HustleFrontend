import React from 'react'
import { motion } from 'framer-motion'

const Post = (props) => {
    return (
        <div className='bg-slate-300 grid grid-cols-4 p-3 gap-3' style={{ height: '' }}>
            <div className='border border-white rounded-lg h-full p-2 bg-slate-400'>
                <div className='border border-white h-fit'>

                    <div className='flex justify-start' >
                        
                        <img className='h-12 border w-12 m-2 rounded-full' src={props.img} alt="" /><span className='mx-3 my-auto'>{props.name}</span>
                    </div>

                    <div className='post ' style={{ height: 'auto' }}>
                        <img src={props.dp} alt="" />
                    </div>


                </div>
            </div>



        </div>
    )
}

export default Post