import React from 'react'
import {useParams} from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Donation = () => {
    const sender = useParams()
    const receiver = useParams()
    console.log("details",sender , receiver)

  return (
    <div>
      <Navbar/>

      <h1>Donate Here</h1>    
     
     
    </div>
  )
}

export default Donation