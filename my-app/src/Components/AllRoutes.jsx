import React from 'react'
import { Route, Routes } from "react-router-dom";
import VideoPlayer from "./VideoPlayer"
import { Home } from '../Page/Home';
import SignupPage from '../Page/SIgnUp';
import LoginPage from '../Page/Login';
import SIgnUp from '../Page/SIgnUp';
import Login from '../Page/Login';
import Marketing from './Marketing';
import Job from './Job';
import Grammer from './Grammer';
import Digital from './Digital';
import PrivateRoute from '../Page/PrivateRoute';


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/VideoPlayer" element={<PrivateRoute><VideoPlayer/></PrivateRoute>} />
            <Route path="/marketing" element={<PrivateRoute><Marketing/></PrivateRoute>} />
            <Route path="/Job" element={<PrivateRoute><Job/></PrivateRoute>} />
            <Route path="/Grammer" element={<PrivateRoute><Grammer/></PrivateRoute>} />
            <Route path="/Digital" element={<PrivateRoute><Digital/></PrivateRoute>} />
            <Route path='signUp' element={<SIgnUp/>} />
            <Route path='login' element={<Login/>} />
        </Routes>
    </div>
  )
}
