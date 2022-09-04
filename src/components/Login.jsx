import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux'
import { login } from '../redux/features/userSlice'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [passErr, setPassErr] = useState("")
    const [backendmsg, setBackendmsg] = useState('')
    const navigate = useNavigate()
    const url = 'https://hustbackend.herokuapp.com/auth/'
    const dispatch = useDispatch()

    const notify = () => {
        console.log('clicked')
        toast.error('Enter Correct Credentials!', { position: toast.POSITION.TOP_RIGHT })
    }



    const clientId = '771822731202-at3s06ki9ohv34efmhgv9b32ci1094tm.apps.googleusercontent.com';
    const handler = (e) => {

        e.preventDefault()
        const formValue = {
            email: email,
            password: password
        }
        console.log(formValue.email)
        if (formValue.email === "") {
            console.log('email errr')
            toast.error('Enter Correct Email Address!', { position: toast.POSITION.TOP_RIGHT })

            setError(true)

            console.log(error)
            setEmailError('Enter your Email address')
        } else {
            setError(false)
            setEmailError('')
        }
        if (formValue.password === "") {
            setError(true)
            toast.error('Enter Correct Password!', { position: toast.POSITION.TOP_RIGHT })

            setPassErr('Enter your Password')

        } else {
            setError(false)
            setPassErr("")
        }
        if (error === false) {
            console.log(email, password)
            dispatch(login({ formValue, navigate }))
            // api call
            // axios.post(`${url}`+"login", formValue).then((response) => {

            //     console.log(response.data)
            //     if (response.data == "Invalid Email") {
            //         setBackendmsg('Invalid Email ')
            //     } else if(response.data=='Invalid Password'){
            //         setBackendmsg('Invalid Password')

            //     }else{ 
            //         console.log(response.data.accessToken) 
            //         let data = JSON.stringify(response.data)
            //         localStorage.setItem('userData',data)
            //         navigate("/")
            //     }
            // })
        }

    }
    //one tap



    return (
        <div className='justify-center h-screen flex'>
            <ToastContainer
                autoClose={2000}
                hideProgressBar={false}

            />
            {/* {error ? notify() : ""} */}
            <div class="h-fit flex items-center justify-center shadow mt-9 shadow-md shadow-slate-600 rounded-lg py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div>
                        {/* <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/> */}
                        <span class="self-center border px-3 py-1 border-slate-900 border-2 text-sm font-semibold whitespace-nowrap uppercase dark:text-dark">H u s t l e r</span>

                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
                        {/* <button onClick={notify}>hello</button> */}
                        <p class="mt-2 text-center text-sm text-gray-600">
                            Or
                            <Link to='/signup'>
                                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Create Your New Account </a>
                            </Link>
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        {backendmsg ? <div className='bg-red-500 rounded text-white'>{backendmsg}</div> : ""}
                        <div class="rounded-md shadow-sm -space-y-px">
                            {/* <span className='mb-3 p-3 text-red-600'>{emailError ? emailError : ""}</span> */}
                            <div>
                                <label for="email-address" class="sr-only">Email address</label>
                                <input className='mt-3' id="email-address" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                {/* <span className='mb-3 p-3 text-red-600'>{passErr ? passErr : ""}</span> */}

                                <label for="password" class="sr-only">Password</label>
                                <input id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                {/* <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" /> */}
                                {/* <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label> */}
                            </div>

                            <div class="text-sm">
                                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" onClick={handler} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Login
                            </button>
                        </div>
                    </form>
                    <GoogleOAuthProvider clientId="771822731202-at3s06ki9ohv34efmhgv9b32ci1094tm.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>

                </div>
            </div>





        </div>
    )
}
