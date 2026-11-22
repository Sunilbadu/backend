import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInastance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n mongodb connected..! DB HOST : ${connectionInastance.connection.host}`);
       
    } catch (error) {
        console.log("mongodb connection error", error);
        process.exit(1);
    }
}

export default connectDB