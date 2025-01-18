import Product from "../models/product.js"


export async function addProduct(req,res) {
    
    try{
        const data = req.body
        const newProduct = new Product(data)
        await newProduct.save();
        res.json({
            message : "Item added",
            user : req.user.email
        })
       

    }catch(err){
        res.status(500).json({
            message : "item not added"
        })
        console.log(err)
    }
}