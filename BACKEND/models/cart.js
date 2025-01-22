import mongoose from "mongoose";

const cartSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    quantity : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    }
})

const Cart = mongoose.model("cart",cartSchema)

export default Cart