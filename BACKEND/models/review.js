import mongoose from "mongoose";

const reviewShema = new mongoose.Schema({

    reviewId : {
        type : String,
        required : true,
        unique : true
    },
    productId : {
        type : String,
        required : true,
    },
    cusName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
    ,
    phone : {
        type : String,
        required : true
    }
    ,
    message : {
        type : String,
        required : true
    },
    ratingCount : {
        type : Number,
        required : true,
        default : 0
    },
    isApprovel : {
        type : Boolean,
        required : true,
        default : false
    },
    date : {
        type : Date,
        required : true,
        default : Date.now()
    }

})

const Review = mongoose.model("review",reviewShema);

export default Review