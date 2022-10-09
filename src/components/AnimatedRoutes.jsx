import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from '../Pages/Home/Home';
import LoginPage from '../Pages/Home/LoginPage';
import Navbar from './Navbar';
import { SignupPage } from '../Pages/Home/SignupPage';
import { AboutPage } from '../Pages/Home/AboutPage'
import { ProfilePage } from '../Pages/Home/ProfilePage'
import AdminLogin from '../Pages/Home/AdminLogin';
import AdminPage from '../Pages/Home/AdminPage';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import { Profile } from './Profile';
import AllFeed from '../Pages/Home/AllFeed';
import { Messenger } from '../Pages/Home/Messenger';
import Donation from '../Pages/Home/Donation'
import UserProfile from '../Pages/Home/UserProfile';

const AnimatedRoutes = () => {
    const location = useLocation() 

    return (
        <div>

            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/profile/:id' element={<ProfilePage />} />
                    <Route path='/admin' element={<AdminLogin />} />
                    <Route path='/adminPage' element={<AdminPage />} />
                    <Route path="/chat" element={<Messenger />} />
                    <Route path='/userProfile/:userid' element={<UserProfile/>} />
                    <Route path='/donate/:receiver/:sender' element={<Donation/>}/>
                    <Route path='/feed/:userDetails' element={<AllFeed/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes