import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
dotenv.config({});

const app = express();

import dbConnection from "./database/db.js";
dbConnection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const _dirname = path.resolve();

app.use(cors({
    origin: "https://myproject-resume.onrender.com/",
    credentials: true
}))

import userRoute from "./routes/userRoute.js";
import resumeRoute from "./routes/resumeRoute.js";

app.use('/api/v1',userRoute);
app.use('/api/v1',resumeRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.use((req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

export default app;
