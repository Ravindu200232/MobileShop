import express from "express"
import { isApprove, reviewAdd, reviewDelete, reviewGet, reviewUpdate } from "../controllers/reviewController.js";

const reviewRoute = express.Router();

reviewRoute.post("/",reviewAdd)
reviewRoute.get("/",reviewGet)
reviewRoute.put("/isApprove/:id",isApprove)
reviewRoute.put("/:id",reviewUpdate)
reviewRoute.delete("/:id",reviewDelete)


export default reviewRoute