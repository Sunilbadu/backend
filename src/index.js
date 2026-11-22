
import dotenv from "dotenv"
import app from "./app.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import connectDB from "./db/index.js";

 
dotenv.config({
    path: './.env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`app is listening on the port ${process.env.PORT}`);
        
    })
}
)
.catch((err)=>{
    console.log("mongo db conection failed",err);
    
})
























