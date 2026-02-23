import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {FaFileAlt, FaBriefcase, FaBars,FaTimes} from "react-icons/fa";
import { MdLogout, MdDashboard } from "react-icons/md";
import HomeFeatures from "../components/HomeFeatures";

const HomePage = () => {

  const navigate = useNavigate();

  const { currentUser } = useSelector((store) => store.user);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logoutHandler = async () => {
    try {
      const res = await axios.get(
        "https://apexresume-backend.onrender.com/api/v1/logout",
        { withCredentials: true }
      );
      if (res.status === 200) {
        sessionStorage.removeItem("isLoggedIn");
        toast.success("User logged out successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900">
      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-xl transition-all duration-300 z-50
        ${sidebarOpen ? "w-72" : "w-0 md:w-72"} overflow-hidden`}
      >
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex<span className="text-blue-600">Resume</span>
          </h1>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="mt-6 px-4 space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 hover:text-blue-400">
            <MdDashboard />
            <button onClick={() => {navigate("/home")}} className="cursor-pointer">Dashboard</button>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 hover:text-blue-400">
            <FaFileAlt />
            <button onClick={() => {navigate("/home/allresume")}} className="cursor-pointer">My Resumes</button>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 hover:text-blue-400">
            <FaBriefcase />
            <button onClick={() => {navigate("/home/tranding-jobs")}} className="cursor-pointer">Job Suggestions</button>
          </div>
        </div>

        {/* LOGOUT */}
        <div className="absolute bottom-4 w-full px-4">
          <button
            onClick={logoutHandler}
            className="w-full cursor-pointer flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl"
          >
            <MdLogout /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 md:ml-72 p-6">
        {/* MOBILE HEADER */}
        <div className="md:hidden flex justify-between mb-6">
          <button onClick={() => setSidebarOpen(true)}>
            <FaBars />
          </button>
          <h2 className="font-bold">Dashboard</h2>
        </div>

        <h2 className="text-3xl font-bold mb-8">
          Welcome back,{" "}
          <span className="text-blue-600">
            {currentUser?.userName || "User"}
          </span>
        </h2>

        {/* FEATURE CARDS */}
        <HomeFeatures />
      </main>
    </div>
  );
};

export default HomePage;
