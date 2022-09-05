import React from "react";
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminDash from "../../components/AdminDash";


const AdminPage = () =>{
    useEffect(()=>{

    })

    return(
        < div className="bg-gradient-to-b from-blue-100 to-blue-300">
        <Navbar/>
        <div className="h-full pb-10">
        <AdminDash/>
            
        </div>
        </div >
    )
}
export default AdminPage;