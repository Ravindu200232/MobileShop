
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
    ,
    specification : {
        type : String,
        required : true
    },
    features : {
        type : String,
        required : true
    }
    ,
    brand : {
        type : String,
        required : true
    },
    model_Number : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    quantity_Stock : {
        type : Number,
        required : true
    },
    warenty_Period : {
        type : Date,
        required : true
    },
    brand_image : {
        type : String,
        required : true,
        default : "asdasdads"
    }
    ,
    Image : {
        type : String,
        required : true,
        default : "adsadasd"
    },
    created_at : {
        type : Date,
        default : Date.now()
    }


})



const Product = mongoose.model("product",productSchema);

export default Product
