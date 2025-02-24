import express from "express";
import {
    deleteUser,
  getAllUser,
  getUser,
  userLogin,
  userRegister,
  userUpdate,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/", userRegister);
userRoute.post("/login", userLogin);
userRoute.get("/:id", getUser);
userRoute.get("/", getAllUser);
userRoute.put("/:id",userUpdate);
userRoute.delete('/:id',deleteUser);

export default userRoute;
