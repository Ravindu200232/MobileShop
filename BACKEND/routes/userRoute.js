import express from "express"
import { userLogin, userRegister } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/",userRegister);
userRoute.post("/login",userLogin)

export default userRoute