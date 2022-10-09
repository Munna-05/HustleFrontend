import React from 'react'
import Feed from '../../components/Feed'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const AllFeed = () => {
    const [post,setPost] = useState([])
    const userDetails  = useParams()
    console.log(userDetails)
    useEffect(()=>{
        axios.get(`http://localhost:5001/auth/getAllPost/${userDetails}`).then((response)=>{
            setPost(response.data)
            console.log(response)
        })
    })
  return (
    <div><Feed post={post}/></div>
  )
}
export default AllFeed