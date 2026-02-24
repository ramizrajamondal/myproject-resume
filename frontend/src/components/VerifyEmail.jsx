import React, { useState } from 'react'
import { toast } from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import axios from "axios"
const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const navigate = useNavigate();
  const onChangeHandler = (e, i) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[i] = value;
    setOtp(newOtp);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const filled = otp.filter((val) => val !== "").length;
      if (filled < 6) {
        toast.error("enter 6 digit otp")
        return;
      }
      const enteredOtp = otp.join("");
      const url = "https://myproject-resume.onrender.com/api/v1/verify-email"
      const response = await axios.post(url, {otp: enteredOtp}, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      if(response.status == 200){
        toast.success("email verified sucessfully please login")
        navigate('/')
      }
    }
    catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message)
    }
    finally{
      setOtp(["","","","","",""])
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className='w-full max-w-md bg-white backdrop-blur-lg shadow-xl rounded-3xl p-8 text-center text-black'>
        <h1 className='text-blue-600 text-3xl font-bold'>apexResume</h1>
        <h1 className="text-2xl mt-10 font-semibold mb-2 text-gray-800">Verify Your Email address</h1>
        <p className="text-gray-600 text-sm font-medium mt-5 mb-6">
          In order to start using your Apexresume accunt you need to conform your email address.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-4 mb-6">
            {otp.map((val, i) => (
              <input
                key={i}
                type="text"
                value={val}
                maxLength={1}
                onChange={(e) => onChangeHandler(e, i)}
                className='max-sm:w-9 w-14 h-14 text-center text-2xl font-semibold rounded-xl bg-gray-200 text-blue-500 border focus:outline-none'
              />
            ))}
          </div>
          <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 transition-normal text-white font-semibold py-3 rounded-md">
            Verify Email Address
          </button>
        </form>
         <div className='flex items-center justify-center flex-col'>
          <hr className='text-gray-400 mt-5 w-1/4' />
          <p className='text-sm font text-gray-500 mt-5'>
          if you did't sign up for this account you can ignore this email
          and this account will be deleted.
          </p>
         </div>
      </div>
    </div>
  )
}

export default VerifyEmail
