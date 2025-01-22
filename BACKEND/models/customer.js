import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    address : [
        {
            fullName : {
                type : String,
                required : false
            },
            address : {
                type : String,
                required : false
            },
            phone : {
                type : String,
                required : false
            }

    }],
    orderHistory :[
        {
            name : {
                type : String,
                required : true
            },
            
            description : {
                type : String,
                required : true
            }
            ,
            
            price : {
                type : String,
                required : true
            },
            Image : {
                type : String,
                required : true
            }
        }
    ],
    cartItems : [
        {
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
        }
    ],
    paymentHistory : [
        {
            paymentDate : {
                type : Date,
                required : true,
            },
            amount : {
                type : String,
                required : true
            },
            paymentMethod : {
                type : String,
                required : true
            }
        }
    ]
})

const Customer = mongoose.model("customer",customerSchema);

export default Customer;