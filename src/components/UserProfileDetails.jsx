import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import VideoTutorial from './VideoTutorial'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import Post from './Post'
import { AnimatePresence } from 'framer-motion'
import './userProfileStyle.css'



const UserProfileDetails = (props) => {
    const [data, setData] = useState(false)
    const [editor, setEditor] = useState(false)
    const [username, setUsername] = useState('')
    // const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')
    const [id, setId] = useState('')
    const [upi, setUpi] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [password, setPassword] = useState('')
    const [change, setChange] = useState(false)
    //for submitting post
    const [file, setFile] = useState(null)
    const [postDescription, setDescription] = useState('')
    const [reImage, setReimage] = useState(false)
    const [image, setImage] = useState('')
    const [post, setPost] = useState([])
    const [channelId, setChannelId] = useState('')

    const [selectedId, setSelectedId] = useState(null)


    const alerts = () => {
        console.log('clicked')
        console.log(data)
        setData(!data)
    }

    useEffect(() => {
        axios.get(`http://localhost:5001/auth/userDetails/${props.id}`).then((response) => {
            console.log(response.data)
            setUsername(response.data.name)
            setEmail(response.data.email)
            setId(response.data._id)
            setUpi(response.data.upi)
            // setDescription(response.data.description)
            setPassword(response.data.password)
            setCountry(response.data.country)
            setState(response.data.state)
            setAbout(response.data.about)
            console.log(username, email, id, state, country, about)


        })
        axios.get(`http://localhost:5001/auth/getPosts/${props.id}`).then((details) => {
            const userPosts = details
            setPost(details.data.post)
            console.log("post details received", details)
        })

    }, [])
    const editProfile = () => {
        setEditor(!editor)
        console.log('edit')
    }
    const updateUser = (e) => {
        e.preventDefault()
        console.log('update clicked')
        const data = {
            name: username,
            email: email,
            upi: upi,
            country: country,
            state: state,
            password: password,
            about: about,
        }
        axios.post(`http://localhost:5001/auth/userUpdate/${id}`, data).then((response) => {
            if (response) {
                console.log(response.data === 'user updated')
                toast.success('User Details Updated', { position: toast.POSITION.TOP_RIGHT })

            } else {
                toast.error('Update Failed', { position: toast.POSITION.TOP_RIGHT })

            }
        })


    }
    const postHandler = (e) => {
        console.log(reImage)
        e.preventDefault()
        const postDetails = {
            userId: id,
            description: postDescription,
            time: new Date(),
            comments: [],
            likes: []

        }
        if (file) {
            const data = new FormData()
            const filename = file.name
            data.append('file', file)
            data.append("name", filename)
            postDetails.img = filename;
            try {
                axios.post('http://localhost:5001/auth/saveImage', data).then((response) => {
                    console.log(response)
                })
            } catch (err) {
                console.log(err)
            }
        }
        try {
            axios.post('http://localhost:5001/auth/savePost', postDetails).then((response) => {
                console.log(response)



            })
        } catch (err) {
            console.log(err)
        }
    }
    const verify = (e) => {
        e.preventDefault()
        const channel = channelId

        console.log(channel)

        if (channel) {
            axios.post(`http://localhost:5001/auth/verifyChannel/${channel}/${id}`).then((response) => {
                console.log(response)
            })
        }

    }



    return (
        <motion.div className='w-fit overflow-x-hidden' initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, opacity: 1 }}
        >
            <ToastContainer
                autoClose={2000}
                hideProgressBar={false}

            />
            <main className="profile-page">
                <section className="relative block" style={{ height: "500px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png')"
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-0 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"

                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">

                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <input type="text" placeholder='Enter channel Id ' onChange={(e) => setChannelId(e.target.value)} className='bg-slate-200 mx-3 py-1 rounded border shadow-inner px-2 text-sm shadow-slate-500' name="" id="" />
                                            <button onClick={verify}
                                                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                type="submit"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                verify your Channel
                                            </button>
                                            <button className='border border-black px-2 rounded-full' onClick={alerts}>?</button>

                                        </div>
                                    </div>

                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    22
                                                </span>
                                                <span className="text-sm text-gray-500">Friends</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    10
                                                </span>
                                                <span className="text-sm text-gray-500">Photos</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    89
                                                </span>
                                                <span className="text-sm text-gray-500">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {data ? <div className='container w-full flex justify-center '>
                                    <VideoTutorial />
                                    <button className='mx-2 bg-red-500 text-white rounded-full px-2 h-fit' onClick={alerts}>Close</button>
                                </div>
                                    :
                                    null}

                                <div className='h-fit'><img className='mx-auto rounded-full h-60' src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=" alt="" /></div>
                                <div className="text-center ">
                                    <h3 className="text-4xl capitalize font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                        {props.name}
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold ">
                                        <i className="fas  fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                                        {props.email}
                                    </div>
                                    <div className="mb-2 text-gray-700 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>

                                    </div>
                                    <div className="mb-2 text-gray-700">
                                        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>

                                    </div>
                                </div>
                                <div className="mt-10 h-90 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                                {props.description}
                                            </p>
                                            <a
                                                href="#pablo"
                                                className="font-normal text-pink-500"
                                                onClick={editProfile}
                                            >
                                                Edit Profile
                                            </a>

                                            {
                                                editor ?
                                                    <div>

                                                        <div className='w-full bg-slate-300 h-fit py-3 duration-700 transition mt-5 pt-5  rounded px-3 grid grid-cols-2 '>
                                                            <div className=''>
                                                                <input className='w-full px-3 capitalize rounded-md h-10 mx-auto m-2 grid' type="text" placeholder={username} value={username}
                                                                    onChange={(e) => setUsername(e.target.value)} />
                                                                <input className='w-full px-3  rounded-md h-10 mx-auto m-2 grid' type="text" placeholder={email} value={email}
                                                                    onChange={(e) => { setEmail(e.target.value) }} />
                                                                {/* <input className='w-full px-3 capitalize rounded-md h-10 mx-auto m-2 grid' type="text" /> */}
                                                                <input className='w-full px-3 capitalize rounded-md h-10 mx-auto m-2 grid' placeholder={state} value={state} type="text"
                                                                    onChange={(e) => setState(e.target.value)} />
                                                            </div>
                                                            <div>
                                                                <input className='w-full mx-2 px-3 capitalize rounded-md h-10 mx-auto m-2 grid' type="text" placeholder={country} value={country}
                                                                    onChange={(e) => setCountry(e.target.value)} />
                                                                <input className='w-full mx-2 px-3 capitalize rounded-md h-10 mx-auto m-2 grid' type="text" placeholder={setAbout} value={about} onChange={(e) => setAbout(e.target.value)} />
                                                                <input type="file" class=" w-full mx-2  text-sm  text-slate-500
                                                                file:mx-auto file:py-2 file:px-4
                                                                file:rounded-full file:border-0
                                                                file:text-sm file:font-semibold
                                                                file:bg-violet-50 file:text-violet-700
                                                                hover:file:bg-violet-100
                                                                "/>
                                                                <button className='text-blue-700 flex mx-2 mt-4 hover:underline' onClick={() => setChange(!change)}>Change Password</button>
                                                                {change ?
                                                                    <div className=''>
                                                                        <input type="text" className='w-60 duration-500 px-3 rounded-md h-10 mx-auto ' placeholder={password} value={password} onChange={(e) => setPassword(e.target.value)} />
                                                                    </div> : null
                                                                }
                                                            </div>
                                                        </div>
                                                        <button type='submit' onClick={updateUser} className='bg-blue-400 mt-5 rounded-lg h-10 hover:bg-green-600 hover:duration-200 duration-200 w-40 text-white'>Update</button>

                                                    </div>

                                                    : null
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form action="">

                                <div className='w-full flex p-5 bg-slate-300 justify-center'>

                                    <div className=''>
                                        <div className='h-auto bg-slate-100 rounded-lg px-3 py-3' style={{ width: '40vw' }}>
                                            <textarea type="text " onChange={(e) => setDescription(e.target.value)} className='min-h-20 p-2 w-full rounded bg-slate-200 border border-slate-400 my-1 text-sm px-2' placeholder={`write your post , ${props.name}`} />
                                            <div className='flex px-1 py-3 justify-between'>

                                                <label htmlFor='file' className='px-4 bg-blue-400 hover:bg-blue-600 py-1 rounded-full text-white'>
                                                    Add Image
                                                    <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} class=" w-full mx-2  text-sm  text-slate-500
                                                                file:mx-auto file:py-2 file:px-4
                                                                file:rounded-full file:border-0
                                                                file:text-sm file:font-semibold
                                                                file:bg-violet-50 file:text-violet-700
                                                                hover:file:bg-violet-100
                                                                " style={{ display: 'none' }} />

                                                </label>


                                                <button onClick={postHandler} type="submit" className='px-3 cursor py-1 bg-blue-400 rounded-lg text-slate-100 hover:bg-blue-600'>Post</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className=' overflow-y-hidden grid grid-cols-4 gap-2 flex' id=''>

                            {post.map((details) => {
                                return (
                                    <>
                                        <div id='' className='mx-auto max-w-2xl  h-fit' layoutId={details._id} onClick={() => setSelectedId(details._id)}>
                                            <div className='photos' id=''>

                                                <div className='rounded-xl p-3 mt-3 shadow-md bg-white shadow shadow-slate-500 shadow-md overflow-hidden' style={{ height: 'auto' }}>
                                                   <div className='flex  flex-col'>
                                                   <div className='flex rounded-full w-fit p-1 shadow shadow-slate-300 shadow-md h-10 my-2 s '><img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=" className='rounded-full w-10' alt="" />
                                                        <span className='mx-3 text-slate-600 my-auto'>{props.name}</span>
                                                    </div>
                                                    <div className='text-sm px-2 flex my-3'>{details.description}</div>
                                                   </div>

                                                    <div className='flex border border-black flex-col'>

                                                        <img className='' src={`http://localhost:5001/uploads/${details.img}`} alt="" />
                                                    </div>
                                                    {/* {`http://localhost:5001/uploads/${details.img}`} */}
                                                    <div className='flex mt-1'><span className='text-sm text-slate-400'>comments</span></div>
                                                    <div className='flex'><input type="text" className='w-full mt-3 px-5 py-1 shadow-inner shadow-slate-600 bg-slate-300 rounded-lg' placeholder='comment' name="" id="" />
                                                        <button className='mx-2 bg-blue-300 mt-3 px-3 py-1 rounded-lg'>Post</button>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>



                                    </>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>

        </motion.div >
    )
}
export default UserProfileDetails       