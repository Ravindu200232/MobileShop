import mongoose from "mongoose";

const inquryShema = mongoose.Schema({

    id : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        
    },
    message : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now()
    },
    response : {
        type : String,
        required : false
    },
    isResolved : {
        type : Boolean,
        required : true,
        default : false
    }
})

const Inquiry = mongoose.model("inquiry",inquryShema);

export default Inquiry;