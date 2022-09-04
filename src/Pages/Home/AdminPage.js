import React from "react";
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminDash from "../../components/AdminDash";


const AdminPage = () =>{
    useEffect(()=>{

    })

    return(
        < >
        <Navbar/>
        <div className="h-full pb-10">
        <AdminDash/>
            
        </div>
        </>
    )
}
export default AdminPage;