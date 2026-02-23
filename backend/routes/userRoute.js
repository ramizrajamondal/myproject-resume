import express from "express";
const route = express.Router();
import { register, otpVerification, login, logout, getjobs } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";


route.post('/register',register);
route.post('/verify-email',otpVerification);
route.post('/login',login);
route.get('/logout',authMiddleware,logout);
route.get('/get/tranding-jobs',authMiddleware,getjobs);

export default route;