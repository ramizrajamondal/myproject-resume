import React from 'react';
import { Upload, Search, BarChart3, TrendingUp, Zap } from 'lucide-react';

const About = () => {
    const steps = [
        {
            icon: Upload,
            title: "1. Upload Your Resume (PDF)",
            description: "Securely upload your existing resume file. Our system is not storing your file it ensures complete data privacy.",
            color: "bg-blue-600",
            iconColor: "text-blue-600"
        },
        {
            icon: Search,
            title: "2. Use Genini-AI to Analysis & Keyword Scan",
            description: "Our proprietary AI engine scans your document against thousands of industry-specific job descriptions. We check for ATS compliance, keyword saturation, and formatting errors.",
            color: "bg-purple-600",
            iconColor: "text-purple-600"
        },
        {
            icon: BarChart3,
            title: "3. Receive Instant Score & Detailed Report",
            description: "Get an immediate, unbiased score out of 100. The detailed report breaks down your performance across categories like Impact, Readability, and ATS Suitability.",
            color: "bg-green-600",
            iconColor: "text-green-600"
        },
        {
            icon: TrendingUp,
            title: "4. Get Actionable Improvement Suggestions",
            description: "The AI provides specific feedback. Learn exactly which bullet points to strengthen, which keywords to add, and how to format for maximum impact.",
            color: "bg-red-600",
            iconColor: "text-red-600"
        },
    ];

    return (
        <div id='about' className="min-h-screen bg-slate-50 text-slate-900 font-sans py-16">
            <div className="max-w-4xl mx-auto px-8">

                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Methodology</span>
                    <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-slate-900">
                        Apex <span className="text-blue-600">Resume</span> Works
                    </h1>
                    <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                        We streamline the resume optimization process to maximize your interview chances.
                    </p>
                </div>

                <div className="relative space-y-16">
                    <div className="absolute left-10 top-0 bottom-0 w-1 bg-slate-200 hidden md:block" />
                    {steps.map((step, index) => (
                        <div key={index} className="flex relative items-start md:items-center">
                            {/* side bar of content */}
                            <div className="hidden md:flex flex-col items-center mr-6">
                                <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                                    <Zap className="text-white" size={16} />
                                </div>
                               
                            </div>
                            
                            {/* Content Card */}
                            <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 transition duration-300 hover:shadow-2xl hover:border-blue-200">
                                <div className="flex items-center gap-4 mb-3">
                                    <step.icon className={`text-3xl ${step.iconColor}`} />
                                    <h2 className="text-2xl font-bold text-slate-800">{step.title}</h2>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;