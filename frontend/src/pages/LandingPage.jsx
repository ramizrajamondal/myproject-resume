import React from 'react';
import { FileText, CheckCircle, BarChart3, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import About from "../components/About";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";

const LandingPageStatic = () => {
  const navigate = useNavigate();
  const analyzeResumeButtonHandler = () => {
    navigate('/home');
  }
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24">

        {/* Hero Section */}
        <div id='hero' className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
              10x Interview Rate
            </span>
            <h1 className="mt-6 text-6xl font-extrabold leading-[1.1] text-slate-900">
              Land your dream job with an <span className="text-blue-600">AI-optimized</span> resume.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Upload once and get an instant, detailed score. Our AI guides you through key improvements to bypass strict ATS filters.
            </p>
            
            <button onClick={analyzeResumeButtonHandler}
            className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-300 hover:bg-blue-700 transition-all cursor-pointer text-lg">
            Analyze My Resume Now
            </button>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="text-green-500" size={20} />
                <span>ATS Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="text-green-500" size={20} />
                <span>Smart Suggestions</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur-3xl opacity-10"></div>
            
            <div className="relative bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-800">Our Application Review :</h3>
                </div>
                
                {/* Visual Placeholder for the Analysis */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 h-64 flex flex-col justify-between">
                    <div className="space-y-3">
                        {/* Keyword Compliance Bar */}
                        <div className="flex justify-between text-sm text-slate-700 font-medium">
                            <span>Keyword Compliance</span>
                            <span>95%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full">
                            <div className="h-full bg-blue-500 rounded-full w-[95%]"></div>
                        </div>
                        
                        {/* Formatting Bar */}
                        <div className="flex justify-between text-sm text-slate-700 font-medium">
                            <span>Formatting & Readability</span>
                            <span>80%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full">
                            <div className="h-full bg-blue-500 rounded-full w-[80%]"></div>
                        </div>
                        
                        {/* Impact/Action Verbs Bar */}
                        <div className="flex justify-between text-sm text-slate-700 font-medium">
                            <span>Impact & Verbs</span>
                            <span>85%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full">
                            <div className="h-full bg-blue-500 rounded-full w-[75%]"></div>
                        </div>
                    </div>
                    
                    
                    <div className="text-center mt-4">
                        <FileText size={32} className="text-blue-400 mx-auto" />
                        <p className="text-slate-400 text-sm mt-1">See detailed, page-by-page feedback inside.</p>
                    </div>
                </div>
                
                <p className="mt-4 text-xs text-center text-slate-400 flex items-center justify-center gap-1">
                  <ShieldCheck size={14} /> Fully Trusted.
                </p>
            </div>
          </div>
        </div>

        {/* Features Section*/}
        <section id='features' className="mt-32 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="bg-blue-600 text-white hover:bg-green-600 hover:text-black transition-normal w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
              <BarChart3 />
            </div>
            <h4 className="text-xl font-bold">Instant Scoring</h4>
            <p className="text-slate-600">Get a score out of 100 based on how well your resume matches industry standards.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-600 text-white hover:bg-rose-600 hover:text-black w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
              <FileText />
            </div>
            <h4 className="text-xl font-bold">Keyword Gap Analysis</h4>
            <p className="text-slate-600">We identify missing skills and keywords that recruiters are looking for in your niche.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-600 text-white hover:bg-amber-600 hover:text-black w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
              <CheckCircle />
            </div>
            <h4 className="text-xl font-bold">Grammar & Impact</h4>
            <p className="text-slate-600">Detect passive voice and weak action verbs to make your achievements stand out.</p>
          </div>
        </section>
      </main>

      <About />
      <Footer />

    </div>
  );
};

export default LandingPageStatic;