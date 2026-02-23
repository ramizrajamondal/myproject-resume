import React from 'react'
import {FaFileAlt,FaRobot,FaBriefcase,FaChevronRight} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HomeFeatures = () => {

    const navigate = useNavigate();
    const features = [
        {
            heading: "Get Score",
            description: "Do you want to play with your resume click below.",
            buttonTxt: "Click Me",
            icon: FaFileAlt,
            color: "bg-blue-600",
        },
        {
            heading: "Previous Activities",
            description: "Get your previous resume analysis and feedback.",
            buttonTxt: "My Resumes",
            icon: FaRobot,
            color: "bg-purple-600",
        },
        {
            heading: "Job Suggestions",
            description: "Find the most trending jobs matching your profile.",
            buttonTxt: "View Jobs",
            icon: FaBriefcase,
            color: "bg-green-600",
        },
    ];

    const buttonHanlder = (e) => {
      if(e.target.value == "Click Me"){
        navigate('/home/checkresumescore');
      }

      else if(e.target.value == "My Resumes"){
        navigate('/home/allresume');
      }

      else if(e.target.value == "View Jobs"){
        navigate('/home/tranding-jobs');
      }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((ele, i) => (
                <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
                >
                    <div
                        className={`${ele.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                    >
                        <ele.icon className="text-white text-2xl" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{ele.heading}</h3>
                    <p className="text-slate-500 mb-6">{ele.description}</p>

                    <button
                        onClick={buttonHanlder}
                        value={ele.buttonTxt}
                        className="w-full cursor-pointer bg-slate-900 text-white py-3 rounded-xl flex justify-center gap-2"
                    >
                    {ele.buttonTxt} <FaChevronRight className='mt-1' />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default HomeFeatures
