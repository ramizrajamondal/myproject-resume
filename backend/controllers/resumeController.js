import resumeResponse from "../utils/resumeResponse.js";
import resumeAnalysisModel from "../models/resumeAnalysisModel.js";

export const getResumeScore = async (req,res) => {
    try {
        const {resumeText, jobDescription} = req.body;
        if(!resumeText || !jobDescription){
            return res.status(401).json({message: "please upload your resume or enter your job role"});
        }
        const userId = req.userId;
        if(!userId){
            return res.status(401).json({message: "unauthorized user for user id "});
        }
        const responseCount = await resumeAnalysisModel.countDocuments({userId});
        if(responseCount >= 3){
            return res.status(403).json({message: "You have reached your limit of 3 resume analyses for free"})
        }
        const response = await resumeResponse(resumeText,jobDescription);
        if(!response){
            return res.status(500).json({message: "Something went wrong"});
        }
        const string = response.suggestions;
        const formatedString = string.replace(/\n+/g, "\n\n",'').trim();
        const newResumeAnalysis = await resumeAnalysisModel.create({
            userId: userId,
            jobDescription: jobDescription,
            matchScore: response.score,
            missingSkills: response.missingSkill,
            suggestions: formatedString,
        })
        if(!newResumeAnalysis){
            return res.status(502).json({message: "does not provide resume response"});
        }
        return res.status(200).json({newResumeAnalysis, message: "resume response got sucessfully"});
    } 
    catch (error) {
        return res.status(501).json({message: error.message});
    }

}

export const getAllPreviousResponse = async (req,res) => {
    try {
        const userId = req.userId;
        if(!userId){
            return res.status(401).json({message: "user is unauthorized"});
        }
        const allResumeResponse = await resumeAnalysisModel.find({userId: userId})
        .select("jobDescription matchScore missingSkills suggestions")
        .sort({createdAt: -1})

        if(!allResumeResponse){
            return res.status(404).json({message: "no previous response found"});
        }
        return res.status(200).json({allResumeResponse, message: "previous response fetched successfully"});
    } 
    catch (error) {
       return res.status(501).json({message: error.message})
    }
}