import express from "express"
import { getUser, userLogin, userRegister } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/",userRegister);
userRoute.post("/login",userLogin);
userRoute.get("/",getUser)
export default userRoute