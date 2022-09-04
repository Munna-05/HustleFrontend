import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { Profile } from './Profile'
import { useParams } from 'react-router-dom'

export const Card = (props) => {

    return (
        <div className=''>
            <div className=' flex justify-center'>
                <div class="max-w-xxl border duration-500 hover:scale-105 bg-slate-300 hover:bg-slate-200 hover:transition duration-700 ease-in-out m-4 rounded-xl overflow-hidden shadow-slate-900 shadow-lg hover:shadow-md">

                    <div class="px-6 py-4 h-auto flex">
                        <div>
                            <img className='rounded-full mt-10 h-25 w-40' src={props.dp} alt="" />
                        </div>

                        <div class="font-bold mx-3 text-xl">
                            <div className='pt-3'>

                                {props.name}
                            </div>

                            <div className='my-3'>
                                <div className=' overflow-y-scroll'>
                                    <p class="text-gray-700 max-w-sm px-3 h-20 text-xs" style={{}} >
                                        {props.description}
                                    </p>
                                </div>
                                <div className='mt-5'>
                                <span className='capitalize text-lg '>total subscribers</span>
                                <span className='px-3 h-10 py-0 text-xl  text-red-700'>{props.subs}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 flex justify-end pb-2">
                        <Link to={`/profile/${props.id}`}>
                            <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-6 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Profile</span>
                        </Link>
                        {/* <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-2 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Promotion</span> */}
                        {/* <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-5 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Donate</span> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
