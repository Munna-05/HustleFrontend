import React from 'react'
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLog from '../../components/AdminLog'

const AdminLogin = () => {
    return (
        <div className='bg-no-repeat bg-gradient-to-b from-blue-100  to-slate-200'>
        <Navbar/>
        <AdminLog/>
        </div>

    )
}

export default AdminLogin