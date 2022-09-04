import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const AdminLog = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate= useNavigate()
    const notify = () => {
        console.log('clicked')
        toast.error('Enter Correct Credentials!', { position: toast.POSITION.TOP_RIGHT })
    }
    const handler = (e) =>{
        e.preventDefault()
        const adminDetails ={
            username:username,
            password:password
        }
        console.log(adminDetails)
        if(username===""||password===""){
            toast.error('Enter Your Credentials')
        }else if(adminDetails.username!='admin'){
            toast.error('invalid Username',{position:toast.POSITION.BOTTOM_RIGHT})
        }else if(adminDetails.password !="admin123"){
            toast.error('Wrong Password',{position:toast.POSITION.BOTTOM_RIGHT})
        }else{
            toast.success("welcome",{position:toast.POSITION.TOP_CENTER})
            setTimeout(() => {
                navigate('/adminPage')
            }, 2500);
        }
    }

  return (
    <div style={{height:'100vh'}}>
        <ToastContainer
                autoClose={2000}
                hideProgressBar={false}

            />
            <div className="h-60"></div>
                {/* <h1 className='m-4'>Admin Login</h1> */}
        <div className='flex justify-center'>
            <div className='grid max-w-60 bg-slate-300 p-8 rounded-lg shadow shadow-slate-800 shadow-md grid-cols-1'>
                <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className='rounded-md p-2 w-60 px-4' type="text" placeholder='Admin Username' name="" id="" />
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='rounded-md p-2 mt-5 w-60 px-4' type="password" placeholder='Password' name="" id="" />

            </div>

        </div>
            <button onClick={handler} className='m-5 bg-blue-500 p-2 px-6 text-white rounded-lg shadow shadow-slate-700 shadow-md'>
                Login
            </button>

    </div>
  )
}

export default AdminLog