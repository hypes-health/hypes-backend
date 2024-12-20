import express from "express";
import authRoutes from "./Routes/auth.routes.js"
import userRoutes from "./Routes/user.routes.js"
import connectDB from "./DB/index.js";
import cookieParser from "cookie-parser";
import * as dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from "body-parser";

dotenv.config({path : "./.env"});
bodyParser.json()
const app = express()
app.use(cors({
    origin: "http://localhost:3000", // Replace with your client URL
    credentials: true // Allows cookies to be sent
  }));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth" , authRoutes)
app.use("/api/user" , userRoutes)

app.listen(8000 , ()=>{
    console.log("Server running on port 8000")
    connectDB();
})