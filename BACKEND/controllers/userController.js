import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export async function userRegister(req,res) {

    try{
        const data = req.body
        data.password = bcrypt.hashSync(data.password,10);

        const isEmailAlready = await User.findOne({
            email : data.email
        })
        if(isEmailAlready){
            res.json({
                message : "Email Already use"
            })
        }else{
            const newUser = new User(data);
            await newUser.save();
            res.json({
                message : "Registration Completed, now you are member of our site"
            })
        }


    }catch(err){
        res.status(500).json({
           message : "Registration unsuccessfully,Please try again"
        })
    }
    
}

export async function userLogin(req,res) {
    
    try{
       
        const data = req.body

        const checkEmail = await User.findOne({
            email : data.email
        });
        
        if(checkEmail){
            const isPasswordCorrect = bcrypt.compareSync(data.password,checkEmail.password);
            if(isPasswordCorrect){

                const token = jwt.sign({
                    firstName : checkEmail.firstName,
                    lastName : checkEmail.lastName,
                    email : checkEmail.email,
                    phone : checkEmail.phone,
                    role : checkEmail.role,
                    profile_Image : checkEmail.profile_Image
                },process.env.SEKRET_KEY)

               res.json({
                message : "Login successfully",
                token : token,
                user : checkEmail
               }) 
            }else{
                res.status(403).json({
                    message : "Password is wrong please try again"
                })
            }

        }else{
            res.status(404).json({
                message : "user not found"
            })
        }


    }catch(err){
        console.log(err)
        res.status(500).json({
            message : "Pleast try again"
        })
    }
}


