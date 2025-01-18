import mongoose from "mongoose";


const userShema = new mongoose.Schema({
    
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
    ,
    phone : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    profile_Image : {
        type : String,
        required : true,
        default : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
    }
    ,
    create_at : {
        type : Date,
        default : Date.now()
    }
})

const User = mongoose.model("user",userShema);

export default User;