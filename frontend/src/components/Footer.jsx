import React from 'react';
import { FileText, Github, UserPen, Linkedin } from 'lucide-react';

const ModernFooter = () => {
  return (
    <footer id='footer' className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start pb-10 border-b border-slate-700">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FileText className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">Apex <span className="text-blue-400">Resume</span></span>
            </div>
            <p className="text-slate-400 max-w-sm">
              The AI-powered tool dedicated to optimizing your resume and securing your next interview. Totally Free.
            </p>
          </div>          
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">
          
          <div>
            <h5 className="font-bold text-slate-200 mb-4">Product</h5>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition">How It Works</a></li>
              <li><a href="#hero" className="hover:text-blue-400 transition">Dashboard</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition">AI Technology</a></li>
              <li className='hover:text-blue-400 transition'>User Reviews</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h5 className="font-bold text-slate-200 mb-4">Company</h5>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#footer" className="hover:text-blue-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
            </ul>
          </div>

          
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-bold text-slate-200 mb-4">Connect</h5>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ramiz-raja-mondal-895074302/" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-400 transition">
                <Linkedin size={24} />
              </a>
              <a href="https://ramizrajamondal.github.io/ramiz-portfolio/" aria-label="Twitter" className="text-slate-400 hover:text-blue-400 transition">
                <UserPen size={24} />
              </a>
              <a href="https://github.com/ramizrajamondal" aria-label="GitHub" className="text-slate-400 hover:text-blue-400 transition">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and Legal */}
        <div className="mt-16 text-center text-xs text-slate-500 pt-6 border-t border-slate-800">
            <div>
              &copy; {new Date().getFullYear()} ResumeAI. All rights reserved. 
            </div> 
            <div className='pt-2'>
              <p className='ml-2 hover:text-blue-400'>Privacy Policy</p>
              <p className='ml-2 hover:text-blue-400'>Terms and Condition</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;