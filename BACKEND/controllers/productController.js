
import Product from "../models/product.js"
import { itIsAdmin, isHasAccount } from "./userPermision.js";


export async function addProduct(req,res) {

    try{
        if(isHasAccount(req)){
            if(itIsAdmin(req)){
                const newProduct = new Product(req.body);

                await newProduct.save();
                res.json({
                    message : "Product added successfully"
                })
                return
            }else{
                res.status(403).json({
                    message : "you are not access this job"
                })
            }

        }else{
            res.status(403).json({
                message : "Please Login"
            })
        }

    }catch(err){
        res.status(500).json({
            message : "Product added unsuccessfully"
        })
    }
}

export async function getProduct(req,res) {
    
    try{
        if(isHasAccount(req)){
            if(itIsAdmin(req)){
                const product = await Product.find();
                res.json(product);
            }else{
                const product = await Product.find({
                    quantity_Stock: { $gt: 0 }
                })
                res.json(product)
            }

        }else{
            const product = await Product.find({
                quantity_Stock: { $gt: 0 }
            })
            res.json(product)
        }

    }catch(err){
        res.status(500).json({
            message : "Internal Server error"
        }) 
    }
}

export async function productUpdate(req,res) {
    try{
        const data = req.body
        if(isHasAccount(req)){
            if(itIsAdmin(req)){
                await Product.updateOne({
                    id : req.body.id
                },data)
                res.json({
                    message : "Update successfully"
                })

                return
            }else{
                res.status(403).json({
                    message : "you are not access this job"
                })
                return
            }
        }else{
            res.status(403).json({
                message : "Please Login"
            })
            return
        }

    }catch(err){
        res.status(500).json({
            message : "isApprove task not completed"
        })
    }
    
}

export function productDelete(req,res){

    if(isHasAccount(req)){

        if(itIsAdmin(req)){


            Product.deleteOne({
                key : req.params.id
            }).then(
                ()=>{
                    res.json({
                        message : "Delete Successfully"
                    })
                }
            )
        }else{
            res.json({
                message : "Do not access this task"
            })
        }
    }else{
        res.json({
            message : "Do not access this task"
        })

    }
}