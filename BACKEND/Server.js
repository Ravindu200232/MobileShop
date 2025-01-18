import bodyParser from "body-parser";
import express from "express"
import dotenv from "dotenv";
import { DBconnection } from "./DBconnection.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import jwt from "jsonwebtoken"

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    let token = req.header
    ("Authorization")
  
if(token!=null){
    token = token.replace("Bearer ","");
    jwt.verify(token,process.env.SEKRET_KEY,
        (err,decoded)=>{
            
            if(!err){
                req.user = decoded;
                return req.user
            }
        }
    );
}
   next()
})

DBconnection();

app.use("/api/user",userRoute)
app.use("/api/product",productRoute)


app.listen(4000 || process.env.PORT,()=>{
    console.log("Server is running port 4000")
})