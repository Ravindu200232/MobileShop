import axios from "axios";
import { useState } from "react"
import { toast } from "react-toastify";

export default function AddItem(){

    const [productName,setProductName] = useState("");
    const [category,setCategory] = useState("Laptop");
    const [description,setDescription] = useState("");
    const [specification,setSpecification] = useState("");
    const [features,setFeatures] = useState("");
    const [brand,setbrand] = useState("");
    const [modelNumber,setModelNumber] = useState("");
    const [price,setPrice] = useState("");
    const [quantity,setQuantity] = useState("0");
    const [warenty,setWarenty] = useState("0");

    function handleproductName(e){
        const value = e.target.value.replace(/[^a-zA-Z0-9\s]/g , "");
        setProductName(value)


    }

    function handleBrand(e){
        const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
        setbrand(value)
    } 

    function handleModel(e){
        const value = e.target.value.replace (/[^a-zA-Z0-9\s]/g, "");
        setModelNumber(value)
    }

    async function addItem() {

        const token = localStorage.getItem("token");

        if(token){

            try{
                const result = await axios.post("http://localhost:4000/api/product",{
                    name : productName,
                    category : category,
                    description : description,
                    specification : specification,
                    features : features,
                    brand : brand,
                    model_Number : modelNumber,
                    price : price,
                    quantity_Stock : quantity,
                    warenty_Period : warenty
                },{
                    headers : {
                        Authorization : "Bearer " + token
                    }
                })

                toast.success(result.data.message)
                
                

            }catch(err){
                toast.error(err.response.data.message)

            }
        }else{
            toast.error("Please login first")
        }
        
        


    }
    
    
    
    return(
        <div className="h-screen w-full flex flex-col items-center justify-center mt-40">
            <div className="w-[500px] bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Add Item</h2>
                
                <label className="block text-sm font-medium">Product Name</label>
                <input type="text" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                   handleproductName(e)
                    }} value={productName}  />
                
                <label className="block text-sm font-medium">Category</label>
                <select className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    setCategory(e.target.value)
                }} value={category} >
                    <option>Laptop</option>
                    <option>Mobile</option>
                    <option>Mobile Parts</option>
                </select>

                <label className="block text-sm font-medium">Description</label>
                <input type="text" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    setDescription(e.target.value)
                }} value={description}/>
                
                <label className="block text-sm font-medium">Specification</label>
                <input type="text" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    setSpecification(e.target.value)
                }} value={specification}/>
                
                <label className="block text-sm font-medium">Features</label>
                <input type="text" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    setFeatures(e.target.value)
                }} value={features}/>
                
                <label className="block text-sm font-medium">Brand</label>
                <input type="text" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    handleBrand(e)
                }} value={brand}/>
                
                <label className="block text-sm font-medium">Model Number</label>
                <input type="text" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    handleModel(e);
                }} value={modelNumber}/>
                
                <label className="block text-sm font-medium">Price</label>
                <input type="number" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    setPrice(e.target.value)
                }} value={price}/>
                
                <label className="block text-sm font-medium">Quantity in Stock</label>
                <input type="number" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    setQuantity(e.target.value)
                }} value={quantity}/>
                
                <label className="block text-sm font-medium">Warranty Period (Monthly)</label>
                <input type="number" className="w-full p-2 border rounded mb-3" onChange={(e)=>{
                    setWarenty(e.target.value)
                }} value={warenty}/>
                
                <label className="block text-sm font-medium">Brand Image URL</label>
                <input type="text" className="w-full p-2 border rounded mb-3" />
                
                <label className="block text-sm font-medium">Product Image URL</label>
                <input type="text" className="w-full p-2 border rounded mb-3" />
                
                <button className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600" onClick={addItem}>
                    Add Product
                </button>
            </div>
        </div>
    )
}