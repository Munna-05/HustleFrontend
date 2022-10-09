import React from 'react'

const VideoTutorial = () => {
    return (
        <div>
            <div className='rounded'>
                <iframe width="560" className='rounded-lg' height="315" src="https://www.youtube.com/embed/yvd3ukbrdL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <button className='mx-3 bg-red-500 h-fit px-2 rounded-full text-white' ></button>
        </div>
    )
}

export default VideoTutorial