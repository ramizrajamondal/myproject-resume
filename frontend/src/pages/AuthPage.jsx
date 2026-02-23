import React from 'react'
import { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import {useDispatch} from "react-redux"
import { setCurrentUser } from '../redux/userSlice';

const AuthPage = () => {
    
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
       try {
        const url = isSignUp ? "https://apexresume-project.onrender.com/api/v1/register" : "https://apexresume-project.onrender.com/api/v1/login"
        const payload = isSignUp ? formData : {email: formData.email, password: formData.password}
        const response = await axios.post(url, payload,{
            headers:{
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        if(response.status == 201 && isSignUp){
           navigate('/verifyemail')
        }
        else if(response.status == 200 && !isSignUp){
            dispatch(setCurrentUser(response.data?.existedUser));
            sessionStorage.setItem("isLoggedIn", true);
            toast.success(response.data?.message);
            navigate('/home');
        }
       } 
       catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
       }
       setFormData({
        username: "",
        email: "",
        password: ""
        })
    }
    return (
            <div className="flex h-screen w-full items-center justify-center bg-gray-100 font-medium">
                <div
                    className={`relative flex w-[800px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ${isSignUp ? "" : "flex-row-reverse"
                        }`}
                >
                    <div
                        className={`flex flex-col justify-center items-center w-1/2 p-10 text-white max-sm:hidden transition-all duration-700 ${isSignUp
                            ? "bg-gradient-to-r from-pink-500 to-orange-500"
                            : "bg-gradient-to-l from-pink-500 to-orange-500"
                            }`}
                    >
                        {isSignUp ? (
                            <>
                                <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                                <p className="text-sm mb-6 text-center">
                                    Already have an account? Sign in to continue your journey.
                                </p>
                                <button
                                    onClick={() => setIsSignUp(false)}
                                    className="px-6 cursor-pointer py-2 border border-white rounded-full text-sm hover:bg-white hover:text-pink-500 transition"
                                >
                                    Sign In
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-3xl font-mono mb-2">Hello, Friend!</h2>
                                <p className="text-sm font-medium mb-6 text-center">
                                    Don’t have an account yet? Create one to get started!
                                </p>
                                <button
                                    onClick={() => setIsSignUp(true)}
                                    className="px-6 cursor-pointer py-2 border border-white rounded-full text-sm hover:bg-white hover:text-pink-500 transition"
                                >
                                    Sign Up
                                </button>
                            </>
                        )}
                    </div>

                    <div
                        className={`flex flex-col max-sm:justify-center max-sm:items-center max-sm:w-full w-1/2 p-10 transition-all duration-initial ${isSignUp ? "translate-x-0" : "-translate-x-0"
                            }`}
                    >
                        {isSignUp ? (
                            <form className="w-72 space-y-4" onSubmit={handleSubmit}>
                                <div className='registermsg'>
                                <h2 className="text-2xl font-semibold text-gray-700">
                                Create Account
                                </h2>
                                <p className='text-sm mt-1 font-mono text-gray-500'>Fill the form to create your account </p>
                                </div>

                                <label htmlFor='username'>Full Name</label>
                                <div className='relative'>
                                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input
                                    type="text"
                                    placeholder="Name"
                                    id='username'
                                    value={formData.username}
                                    onChange={(e) => setFormData({...formData,username: e.target.value})}
                                    className="w-full pl-8 border rounded-lg p-2 text-sm focus:outline-pink-400"
                                   />
                                </div>

                                <label htmlFor='email'>Email</label>
                                <div className='relative'>
                                    <MdOutlineMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
                                    <input
                                    type="email"
                                    id='email'
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData,email: e.target.value})}
                                    className="w-full pl-8 border rounded-lg p-2 text-sm focus:outline-pink-400"
                                   />
                                </div>

                                <label htmlFor="password">Password</label>
                                <div className='relative'>
                                    <RiLockPasswordLine className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
                                    <input
                                    type="password"
                                    id='password'
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData,password: e.target.value})}
                                    className="w-full pl-8 border rounded-lg p-2 text-sm focus:outline-pink-400"
                                   />
                                </div>

                                <button type="submit"
                                className="w-full cursor-pointer bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
                                    Sign Up
                                </button>

                                <div className='flex gap-2.5 w-full items-center justify-center sm:hidden'>
                                Already a member?
                                <button className='text-gray-600'
                                onClick={() => setIsSignUp(false)}>
                                login</button>
                                </div>

                    
                            </form>
                        ) : (
                            <form className="w-72 space-y-4" onSubmit={handleSubmit}>
                                <h2 className="text-2xl font-semibold text-gray-700 text-center">
                                    Login 
                                </h2>
                                <label htmlFor='email'>Email</label>
                                <div className='relative'>
                                    <MdOutlineMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
                                    <input
                                    type="email"
                                    id='email'
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full pl-8 border rounded-lg p-2 text-sm focus:outline-pink-400"
                                   />
                                </div>

                                <label htmlFor="password">Password</label>
                                <div className='relative'>
                                    <RiLockPasswordLine className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
                                    <input
                                    type="password"
                                    id='password'
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    className="w-full pl-8 border rounded-lg p-2 text-sm focus:outline-pink-400"
                                   />
                                </div>

                                <button type='submit' 
                                className="w-full cursor-pointer bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
                                    Sign In
                                </button>

                                <div className='flex gap-2.5 w-full items-center justify-center sm:hidden'>
                                Don't have account?
                                <button className='text-gray-600'
                                onClick={() => setIsSignUp(true)}>Sign-Up
                                </button>
                                </div>

                            </form>
                        )}
                    </div>

                </div>
            </div>
    )
}

export default AuthPage


