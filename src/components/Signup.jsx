import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './signUp.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Signup = () => {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [nameError, setNameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [channel,setChannel] = useState('')
    const [passErr, setPassErr] = useState('')
    const [rpassErr, setRpassErr] = useState('')
    const [error, setError] = useState(false)
    const [bError, setBerror] = useState('')
    const navigate = useNavigate()

    const notify = () => {
        console.log('clicked')
        toast.error('Enter Correct Credentials!', { position: toast.POSITION.TOP_RIGHT })
    }


    const handler = (e) => {


        e.preventDefault()
        const data = {
            name: username,
            email: email,
            channelName:channel,
            password: password,
            rpass: confirmPass

        }
        if (data.name === "") {
            setError(true)
            // setNameErr("Enter Name")
            toast.error('Enter Name', { position: toast.POSITION.BOTTOM_CENTER })


        } else {
            setError(false)
            setNameErr("")
        }
        if (data.email === "") {
            setError(true)
            // setEmailErr('Enter Email Address')
            toast.error('Enter Email', { position: toast.POSITION.BOTTOM_CENTER })


        } else {
            setError(false)
            setEmailErr("")
        }
        if(data.password != data.rpass){
            setError(true)

            toast.error('Password is not Matching',{position:toast.POSITION.BOTTOM_CENTER})
        }else{
            setError(false)

        }

        if (error == false) {
            console.log(username, password, email)
            axios.post('http://localhost:5001/auth/signup', data).then((response) => {
                console.log(response.data)
                if (response.data == "invalid credentials") {
                    toast.error('Check Credentials', { position: toast.POSITION.BOTTOM_CENTER })

                    // setBerror("Check Data Entered")
                } else {
                    navigate('/login')

                }
            })

        }



    }


    return (
        <div className='height'>
            <ToastContainer
                autoClose={2000}
                hideProgressBar={false}

            />
            <div className='h-20'>

            </div>
            <div class="container max-w-sm  mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-none shadow shadow-md shadow-slate-500 px-6 py-8 rounded-lg text-black w-full">
                    <span class="self-center border px-3 py-1 border-slate-900 border-2 text-sm  font-semibold whitespace-nowrap uppercase dark:text-dark">H u s t l e r</span>

                    <h1 class="mb-8 mt-8 uppercase text-3xl text-center">Sign up</h1>
                    <label className='text-red-500' htmlFor="">{bError}</label>
                    <span className='text-red-500 capitalize flex justify-start my-1    '>
                        {error ? nameError : null}

                    </span>
                    <input
                        type="text"
                        class="block border mt-1 border-grey-light w-full p-3 rounded mb-1"
                        name="fullname"
                        value={username}
                        onChange={(e) => { setusername(e.target.value) }}
                        placeholder="Full Name" />

                    <span className='text-red-500 capitalize flex justify-start my-1    '>
                        {error ? emailErr : null}

                    </span>
                    <input
                        type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="Email" />
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        value={channel}
                        onChange={(e) => setChannel(e.target.value)}
                        name="channelName"
                        placeholder="Youtube Channel Name" required />

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder="Password" />
                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        onClick={handler}
                        class="w-full text-center py-3 rounded bg-indigo-600 hover:bg-indigo-800 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a class="no-underline ml-1 border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a class=" ml-1 border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account?
                    <Link to='/login'>
                        <a class="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </Link>
                </div>
            </div>
        </div>
    )
}
