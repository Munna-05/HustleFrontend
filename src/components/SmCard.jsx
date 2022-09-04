import React from 'react'

const SmCard = (props) => {
  return (
    <div>
         <div className='row flex px-9 justify-center'>
                <div class="container border  hover:scale-105 bg-slate-300 hover:bg-slate-200 hover:transition duration-700 ease-in-out m-5 rounded-xl overflow-hidden shadow-slate-900 shadow-lg hover:shadow-md">

                    <div class="px-6 py-4 flex justify-center">
                        <div>
                            <img className='rounded-full mt-5 h-25 w-40' src={props.dp} alt="" />
                        </div>

                        <div class="font-bold mx-3 text-xl ">
                            <div className='pt-3'>

                                {props.name}
                            </div>

                            <div className='my-3 '>
                                <p class="text-gray-700 max-w-sm px-3 h-20 overflow-y-scroll text-xs">
                                    {props.description}
                                    </p>
                            </div>
                            <div className='flex justify-center'>
                                <span className='capitalize text-sm'>total subscribers</span><p className='text-sm mx-4 text-red-700'> {props.subs}</p>
                            </div>
                        </div>
                    </div>
                    <div class=" text-xs flex justify-end pt-2 ">
                        <Link to={`/profile/${props.id}`}>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Profile</span>
                        </Link>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Promotion</span>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full text-xs px-2 py-1 font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Donate</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SmCard