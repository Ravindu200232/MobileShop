import express from "express"
import { addProduct, getProduct,productUpdate } from "../controllers/productController.js";

const productRoute = express.Router();

productRoute.post("/",addProduct)
productRoute.get("/",getProduct)
productRoute.put("/:id",productUpdate)
export default productRoute