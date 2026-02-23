import React, { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

const AllResumePage = () => {
  const [allResume, setAllResume] = useState([]);

  useEffect(() => {
    const getAllResumeResponse = async () => {
      try {
        const url = "https://apexresume-backend.onrender.com/api/v1/getall-resume";
        const response = await axios.get(url, {
          withCredentials: true,
        })
        if (response.status == 200) {
          const data = response.data.allResumeResponse;
          setAllResume(data);
        }
      }
      catch (error) {
        toast.error(error.response?.data?.message || "something went wrong")
      }
    }
    getAllResumeResponse();
  }, [])
  const getScoreColor = (score) => {
    if (score >= 80) return "green";
    if (score >= 60) return "orange";
    return "red";
  };
  
  return (
     <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Your Previous Activities</h2>

      {allResume.length === 0 ? (
        <p className="text-gray-500">No activities found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allResume.map((activity) => (
            <div
              key={activity._id}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition-shadow"
            >
              {/* Job Description and Match Score */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">
                  {activity.jobDescription}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-white font-semibold text-sm`}
                  style={{ backgroundColor: getScoreColor(activity.matchScore) }}
                >
                  {activity.matchScore}%
                </span>
              </div>

              {/* Missing Skills */}
              <div className="mb-2">
                <strong>Missing Skills:</strong>
                <ul className="list-disc list-inside text-gray-600">
                  {activity.missingSkills?.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Suggestions */}
              <div className="text-gray-700 mt-2">
                <strong>Suggestions:</strong>
                <p>{activity.suggestions}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

}

export default AllResumePage
