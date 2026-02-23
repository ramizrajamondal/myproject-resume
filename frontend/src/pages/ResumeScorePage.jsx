import React, { useState } from 'react'
import { FaFileUpload } from "react-icons/fa";
import extractTextFromPDF from '../utils/getTextData.js';
import toast from "react-hot-toast"
import axios from "axios"
import { useEffect } from 'react';
import { ImCross } from "react-icons/im";

const ResumeScorePage = () => {
  const [fileSelected, setFileSelected] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [scoreChecker, setScoreChecker] = useState(false);
  const [gettingRes, setGettingRes] = useState(false);
  const [resumeResponse, setResumeResponse] = useState({
    jobDescription: "",
    matchScore: "",
    missingSkills: [],
    suggestions: ""
  })
  useEffect(() => {
  }, [resumeResponse]);

  const handleFile = async (e) => {
    const resumefile = e.target.files[0];
    if (!resumefile) {
      return toast.error("please select a file");
    }
    setFileSelected(true);
    try {
      const extractText = await extractTextFromPDF(resumefile);
      setResumeText(extractText);
    }
    catch (error) {
      toast.error(error.message);
    }
  }
  const handleForm = async (e) => {
    e.preventDefault();
    setGettingRes(true);
    try {
      const url = "https://apexresume-project.onrender.com/api/v1/analyze-resume"
      const payload = { resumeText: resumeText, jobDescription: jobDescription }
      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      })
      if (response.status == 200) {
        const resumeRes = response.data?.newResumeAnalysis;
        setResumeResponse({
          jobDescription: resumeRes.jobDescription,
          matchScore: resumeRes.matchScore,
          missingSkills: resumeRes.missingSkills,
          suggestions: resumeRes.suggestions
        })
        setScoreChecker(true);
      }
    }
    catch (error) {
      toast.error(error.response?.data?.message || "something went wrong");
    }
    finally {
      setFileSelected(false);
      setGettingRes(false);
    }
    setResumeText("");
    setJobDescription("");
    setFileSelected(false);
  }

  return (
    <div>
      {
        scoreChecker ? (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <button className='px-2 py-2 rounded-md cursor-pointer'
                onClick={() => setScoreChecker(false)}>
                <ImCross className='text-red-600' />
              </button>
              {/* Header */}
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div>
                  <p className="text-sm text-gray-500">Job Role</p>
                  <h2 className="text-2xl mt-2 font-bold capitalize">
                    {resumeResponse.jobDescription}
                  </h2>
                </div>

                {/* Score Circle */}
                <div className="w-24 h-24 rounded-full bg-cyan-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  <span className='text-xl font-bold'>{resumeResponse.matchScore}/100</span>
                </div>
              </div>

              {/* Missing Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Missing Skills
                </h3>

                <div className="flex flex-wrap gap-3">
                  {resumeResponse.missingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">
                  Suggestions to Improve
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  {resumeResponse.suggestions}
                </p>
              </div>

            </div>
          </div>
        )
          : (
            <div className="flex flex-col items-center justify-center h-screen w-full p-8">
              <form onSubmit={handleForm}
                className="flex flex-col shadow-xl p-6 h-2/3 w-full lg:w-1/3 rounded-xl bg-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Upload Your Resume</h2>

                <div className='w-full flex flex-col items-center gap-5 mt-5'>
                  <FaFileUpload className='text-sky-500 text-4xl' />
                  <label className="w-1/3 rounded-full text-center text-md font-medium px-0.5 py-1 bg-sky-500 text-white">
                    {fileSelected ? <p>Selected</p> : <p>Browse</p>}
                    <input
                      type="file"
                      accept='.pdf'
                      onChange={handleFile}
                      className="hidden" />
                  </label>
                  <p className='text-gray-400'>Only PDF files are allowed</p>
                </div>

                <div className='w-full flex flex-col gap-2 mt-5'>
                  <label className=''>
                    <p className='text-sm font-medium'>Give Job Role for Analysis</p>
                  </label>
                  <input
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className='outline-1 p-1 rounded-sm' type="text"
                    placeholder='e.x. Frontend Developer'
                  />
                  <button type="submit" className="px-6 py-2 mt-5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 hover:shadow-xl">
                    {gettingRes ? (
                      <div className="flex items-center justify-center h-8">
                        <div className="h-4 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : <p>submit</p>
                    }
                  </button>
                </div>

              </form>
            </div>
          )
      }
    </div>
  )

}

export default ResumeScorePage


