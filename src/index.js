// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import {$DB_NAME} from "./constants";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import connectDB from "./db/index.js";
// import express from "express"
// const app = express()
 
dotenv.config({
    path: './env'
});

connectDB()
























// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error" , (error)=>{
//             console.log("this is an error")
//         })
//         app.listen(process.env.PORT ,()=>{
//             console.log("app is listening on the port")
//         })
//     } catch (error) {
//         console.error("Error:", error)
//         throw err
//     }
// })()

