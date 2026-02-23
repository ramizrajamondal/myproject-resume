import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req,res,next) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.status(401).json({message: "unauthorized user"});
        const decoded = jwt.verify(token,process.env.ACESS_TOKEN_SECRET)
        if(!decoded){
            return res.status(401).json({message: "invalid token"})
        }
        const authenticatedUser = await userModel.findById(decoded._id);
        if(!authenticatedUser){
            return res.status(401).json({message: "invalid user"});
        }
        //req.user = authenticatedUser;
        req.userId = decoded._id;
        return next();
    } 
    catch (error) {
        return res.status(501).json({message: error.message})
    }
}

export default authMiddleware;