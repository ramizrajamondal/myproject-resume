import express from "express";

import {getResumeScore, getAllPreviousResponse} from "../controllers/resumeController.js"
import authMiddleware from "../middleware/authMiddleware.js";

const route = express.Router();

route.post('/analyze-resume',authMiddleware,getResumeScore);
route.get('/getall-resume',authMiddleware,getAllPreviousResponse);

export default route;