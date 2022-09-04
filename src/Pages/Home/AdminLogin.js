import React from 'react'
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLog from '../../components/AdminLog'

const AdminLogin = () => {
    return (
        <>
        <Navbar/>
        <AdminLog/>
        </>

    )
}

export default AdminLogin