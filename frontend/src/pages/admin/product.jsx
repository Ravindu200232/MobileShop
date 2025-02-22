import { AiOutlineAppstoreAdd } from "react-icons/ai"; 
import { useEffect, useState } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import AddItem from "./addItem";
import axios from "axios";
import { toast } from "react-toastify";





export default function Product(){
      const [items,setItem] = useState([])
      const [itemLoaded,setItemLoaded] = useState(false)
      const navigate = useNavigate();

      useEffect(()=>{

        if(!itemLoaded){

          const token = localStorage.getItem("token");
      axios.get("http://localhost:4000/api/product",{
        headers: {Authorization: `Bearer ${token}`},
      }).then(
        (res)=>{
          
          setItem(res.data)
          setItemLoaded(true)
        }
      ).catch((err)=>{
        console.log(err);
      })
        }
      
      },[itemLoaded]);

      function handleDelete(key){
        if(window.confirm("Are you sure you want to delete this item?")){
          const token = localStorage.getItem("token");
          axios.delete(`http://localhost:4000/api/product/${key}`,{
            headers:{Authorization: `Bearer ${token}`}
          }).then((res)=>{
            setItemLoaded(false)
            toast.success("Delete successfully")
          }).catch((err)=>{
            console.log(err)
          })
        }
        
      }

      

    return(
    <div className="w-full h-screen flex flex-col ">

    {!itemLoaded && <div className="border-b w-[100px] h-[100px] my-4 border-b-green-500 rounded-full animate-spin">

    </div>}
    
    <div className="w-full h-16 flex justify-center items-center text-[50px] font-semibold">
        PRODUCT
    </div>

    <div className="w-full h-16 flex flex-row justify-end items-center ">
        <h1 className="mr-4">Add Item</h1>
        <Link to="/admin/item/addItem"><button><AiOutlineAppstoreAdd className="text-[40px] hover:text-[#a24af8] hover:animate-bounce mr-12 hover:"/></button></Link>
    </div>
    <table className="border-collapse border border-gray-300 shadow-lg rounded-lg w-full text-left overflow-hidden">
    <thead className="bg-gray-200 border-b-2 border-gray-400">
    <tr>
      <th className="p-3 border border-gray-300">ID</th>
      <th className="p-3 border border-gray-300">Name</th>
      <th className="p-3 border border-gray-300">Category</th>
      <th className="p-3 border border-gray-300">Description</th>
      <th className="p-3 border border-gray-300">Specification</th>
      <th className="p-3 border border-gray-300">Features</th>
      <th className="p-3 border border-gray-300">Brand</th>
      <th className="p-3 border border-gray-300">Model Number</th>
      <th className="p-3 border border-gray-300">Price</th>
      <th className="p-3 border border-gray-300">Quantity</th>
      <th className="p-3 border border-gray-300">Warranty Period</th>
      <th className="p-3 border border-gray-300">Approve</th>
      <th className="p-3 border border-gray-300">Image</th>
      <th className="p-3 border border-gray-300"></th>
      <th className="p-3 border border-gray-300"></th>
    </tr>
    </thead>

  <tbody>
    {items.map((product) => (
      <tr key={product.key} className="odd:bg-white even:bg-gray-100 hover:bg-purple-100">
        <td className="p-3 border border-gray-300">{product.key}</td>
        <td className="p-3 border border-gray-300">{product.name}</td>
        <td className="p-3 border border-gray-300">{product.category}</td>
        <td className="p-3 border border-gray-300">{product.description}</td>
        <td className="p-3 border border-gray-300">{product.specification}</td>
        <td className="p-3 border border-gray-300">{product.features}</td>
        <td className="p-3 border border-gray-300">{product.brand}</td>
        <td className="p-3 border border-gray-300">{product.model_Number}</td>
        <td className="p-3 border border-gray-300">{product.price}</td>
        <td className="p-3 border border-gray-300">{product.quantity_Stock}</td>
        <td className="p-3 border border-gray-300">{product.warenty_Period}</td>
        <td className="p-3 border border-gray-300">{product.isApprove ? "Approved" : "notApproved"}</td>
        <td className="p-3 border border-gray-300">
          <img src={product.Image} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
        </td>
        <td className="p-3 border border-gray-300">
          <button className=" hover:text-white bg-blue-500 h-14 w-16 rounded-xl mb-3" onClick={()=>{
            navigate('/admin/item/update/',{state:product})
          }}>Update Item</button>
          <button className=" hover:text-white bg-red-500 h-14 w-16 rounded-xl" onClick={()=>{handleDelete(product.key)}}>Delete</button>
        
        </td>
       
        
        </tr>
        ))}
    </tbody>
    </table>


        


            
           
        </div>
    )
}