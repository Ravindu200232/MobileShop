import mongoose from "mongoose";
import dotenv from "dotenv"

export function DBconnection(){
    

    dotenv.config();

    const MONGOURL = process.env.MONGO_URL;

    mongoose.connect(MONGOURL);

    const connection = mongoose.connection
    connection.once("open",()=>{
        console.log("MongoDB Connection stablished successfully");
    })
}
