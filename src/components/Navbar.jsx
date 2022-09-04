import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogout } from '../redux/features/userSlice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notify = () => {
    console.log('clicked')
    toast.error('Enter Correct Credentials!', { position: toast.POSITION.TOP_RIGHT })
}
const Navbar = () => {
    const { user } = useSelector((state) => ({ ...state.user }))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        // localStorage.removeItem('userData')
        localStorage.removeItem('token')
        dispatch(setLogout())
        console.log('logged out')
        navigate('/')
        toast.success('successfully Logged out',{position:toast.POSITION.TOP_RIGHT})
    }


    return (
        <div className='w-screen'>
            
              <ToastContainer
                autoClose={2000}
                hideProgressBar={false}

            />

            <div class="bg-none dark:border-gray-600 container mx-auto "  >
                <div class="container bg-slate-300 bg-opacity-10 bg-clipping-padding flex fixed flex-wrap justify-between items-center" style={{ backdropFilter: "blur(20px)" , width:'100%'}}>
                    <a class="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
                      <Link to='/'>
                      <span class="self-center border px-3 py-1 border-slate-900 border-2 hover:bg-slate-300 duration-200 text-sm font-semibold whitespace-nowrap uppercase dark:text-dark">H u s t l e r</span>

                      </Link>  
                    </a>
                    {/* <button onClick={onclick}>click me</button> */}
                    <div class="flex md:order-2">

                        {user ?
                            <button onClick={logout} type="button" class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-1 text-center ">
                                Log Out
                            </button> :

                            <Link to='/login'>
                                <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-1 text-center ">
                                    Log In
                                </button>
                            </Link>
                        }
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                            <Link to='/'>
                                <a href="#" class="block py-2 pr-4 pl-3 text-xs text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </Link>
                            <Link to='/about'>
                                <a href="/about" class="block py-2 pr-4 pl-3 text-xs text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">About</a>
                            </Link>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-xs text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-xs text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                        <div className='h-10'></div>
        </div>
    )
}




export default Navbar