import express from "express"
import { addProduct, getProduct,productDelete,productUpdate } from "../controllers/productController.js";

const productRoute = express.Router();

productRoute.post("/",addProduct)
productRoute.get("/",getProduct)
productRoute.put("/:id",productUpdate)
productRoute.delete("/:id",productDelete)
export default productRoute