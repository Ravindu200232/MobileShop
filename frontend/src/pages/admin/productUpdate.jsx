import axios from "axios";
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductUpdate(){

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location)
    const [productkey,setProductKey] = useState(location.state.key)
    const [productName,setProductName] = useState(location.state.name);
    const [category,setCategory] = useState(location.state.category);
    const [description,setDescription] = useState(location.state.description);
    const [specification,setSpecification] = useState(location.state.specification);
    const [features,setFeatures] = useState(location.state.features);
    const [brand,setbrand] = useState(location.state.brand);
    const [modelNumber,setModelNumber] = useState(location.state.model_Number);
    const [price,setPrice] = useState(location.state.price);
    const [quantity,setQuantity] = useState(location.state.quantity_Stock);
    const [warenty,setWarenty] = useState(location.state.warenty_Period);


    function handleProductkey(e){
        const value = e.target.value.replace(/[^a-zA-Z0-9\s]/g , "");
        setProductKey(value)
    }

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
                const result = await axios.put(`http://localhost:4000/api/product/${productkey}`,{
                    key : productkey,
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
                navigate("/admin/item")
                
                

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
                <h2 className="text-2xl font-semibold mb-4">Update Item</h2>

                <label className="block text-sm font-medium" >Product key</label>
                <input type="text" className="w-full p-2 border rounded mb-3" disabled onChange={(e)=>{
                   handleProductkey(e)
                    }} value={productkey}  />
                
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