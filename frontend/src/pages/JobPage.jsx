import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaBriefcase } from "react-icons/fa";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getTrandingJobs = async () => {
      try {
        const url = 'https://apexresume-project.onrender.com/api/v1/get/tranding-jobs'
        const response = await axios.get(url, {
          withCredentials: true
        })
        if (response.status == 200) {
          const trandingJobs = response.data?.jobs
          setJobs(trandingJobs);
        }
      }
      catch (error) {
        toast.error(error.response?.data?.message);
      }
    }
    getTrandingJobs();
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br justify-center from-indigo-50 via-sky-50 to-white flex  p-6">
      <div className="max-w-3xl w-full mt-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-6 text-center">
          Top Tech Job Roles
        </h1>

        <div className="rounded-2xl shadow-lg divide-y">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-10 py-8 hover:bg-slate-200"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <FaBriefcase className="text-indigo-600" size={22} />
                </div>
                <div>
                  <p className="text-slate-800 font-medium text-2xl">
                    {job}
                  </p>
                  <p className="text-sm text-slate-500">
                    In-demand role
                  </p>
                </div>
              </div>

              <span className="text-sm text-indigo-600 font-medium">
                #{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobPage
