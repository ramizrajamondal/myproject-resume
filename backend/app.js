import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({});

const app = express();

import dbConnection from "./database/db.js";
dbConnection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: "https://apexresume-project-1.onrender.com/",
    credentials: true
}))

import userRoute from "./routes/userRoute.js";
import resumeRoute from "./routes/resumeRoute.js";

app.use('/api/v1',userRoute);
app.use('/api/v1',resumeRoute)

export default app;
