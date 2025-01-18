
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    model_Number : {
        type : String,
        required : true
    }

})

const Product = mongoose.model("product",productSchema);

export default Product
