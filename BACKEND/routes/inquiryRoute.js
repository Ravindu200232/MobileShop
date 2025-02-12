import express from "express";
import { inquiryAdd } from "../controllers/inquiryController.js";

const inquiryRoute = express.Router();

inquiryRoute.post("/",inquiryAdd);

export default inquiryRoute