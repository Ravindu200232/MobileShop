
import Product from "../models/product.js"
import Review from "../models/review.js"
import { isCustomer, isHasAccount, itIsAdmin } from "./userPermision.js"


export async function reviewAdd(req,res) {
    
    try{
        if(isHasAccount(req)){
            if(isCustomer(req)){

               const isCorrectId = await Product.find({
                _id : req.body.productId
               })

               if(isCorrectId){
                let data = req.body
                data.cusName = req.user.firstName + " " + req.user.lastName
                data.phone = req.user.phone
                data.email = req.user.email

                const newReview  = new Review(data);
                await newReview.save();
                res.json({
                    message : "Review Added successfully"
                })
                return
               }
               else{
                res.json({
                    message : "This item not inclued"
                })
                return
               }

               return
            }
            else{
                res.json({
                    message : "can't access this job"
                })
            }
        }else{
            res.json({
                message : "can't access this job"
            })
        }

    }
    catch(err){
        res.status(500).json({
            message : "review Add unsuccessfully"
        })
    }
}

export async function reviewGet(req,res) {

    try{
        if(isHasAccount(req)){
            if(itIsAdmin(req)){
                const review = await Review.find();
                res.json(review);
                return
            }else{
                const review = await Review.find({
                    isApprovel : true
                })
                res.json(review)
                return
            }
        }else{
            const review = await Review.find({
                isApprovel : true
            })
            res.json(review)
            return
        }

    }catch(err){
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
    
}

export async function isApprove(req,res) {
    const id = req.params.id
    
    try{
        if(isHasAccount(req)){
            if(itIsAdmin(req)){
                await Review.updateOne({
                    reviewId : id
                },{
                    isApprovel : true
                })
                res.json({
                    message : "Review Approved successfully"
                })
                return
            }else{
                res.status(403).json({
                    message : "can't access this task"
                })
                return
            }
        }else{
            res.status(403).json({
                message : "please login"
            })
            return
        }
        
    }catch(err){
        res.status(500).json({
            message : "Review Approved unsuccessfully"
        })
    }
    
}

export async function reviewUpdate(req,res) {
    try{
        const id = req.params.id
        const data = req.body
        if(isHasAccount(req)){
            if(itIsAdmin(req)){
                await Review.updateOne({
                    reviewId : id
                },data)
                res.json({
                    message : "review update successfully"
                })
                return
            
            }else{
                const email = req.user.email
                const checkEmail = await Review.findOne({
                    email : email
                })
                if(checkEmail){
                    await Review.updateOne({
                        reviewId : id
                    },{
                        message : data.message,
                        ratingCount : data.ratingCount
                    },)

                    res.json({
                        message : "review update successfully"
                    })
                    return
                }
                return

            }
        }else{
            res.status(403).json({
                message : "please login"
            })
            return
        }
    }catch(err){
        res.status(500).json({
            message : "review update unsuccessfully"
        })
    }
    
}

export async function reviewDelete(req,res) {

    try{

        const id = req.params.id

        if(isHasAccount(req)){
            if(itIsAdmin(req)){
                await Review.deleteOne({
                    reviewId : id
                })
                res.json({
                    message : "Review delete successfully"
                })
                
                return
                
            }else{
                const sameEmail = await Review.findOne({
                    email : req.user.email
                })
                if(sameEmail){
                    await Review.deleteOne({
                        reviewId : id,
                    })
                    res.json({
                        message : "Review delete successfully"
                    })
                    return
                    
                   
                }
                
                
            }
        }else{
            res.json({
                message : "please login"
            })
        }

    }catch(err){
        res.json({
            message : "review Delete unsuccessfully"
        })
    }
    
}