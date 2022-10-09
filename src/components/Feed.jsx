import React from 'react'
import { useEffect } from 'react'

const Feed = (props) => {
  return (  
    <div>{
        props.post.map((data)=>{
            return(
                <div>
                    {data.description}
                </div>
            )
        })
        }</div>
  )
}

export default Feed