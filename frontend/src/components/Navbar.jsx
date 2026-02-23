import React from 'react'
import { FileText } from 'lucide-react';
import {useNavigate} from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate();
    const signInButtonHandler = () => {
       navigate('/auth');
    }
    return (
        <div>
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-2 rounded-lg">
                        <FileText className="text-white" size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Apex <span className="text-blue-600">Resume</span></span>
                </div>
                <div className="hidden md:flex gap-8 font-medium text-slate-600">
                    <a href="#features" className="hover:text-blue-600 transition">Features</a>
                    <a href="#about" className="hover:text-blue-600 transition">How it's work</a>
                    <a href="#footer" className="hover:text-blue-600 transition">Contact</a>
                </div>
                {/* Changed CTA to prompt sign-up/login to access the dashboard */}
                <button onClick={signInButtonHandler}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200/50 cursor-pointer">
                Sign-In
                </button>
            </nav>
        </div>
    )
}

export default Navbar
