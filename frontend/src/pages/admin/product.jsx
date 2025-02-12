import { AiOutlineAppstoreAdd } from "react-icons/ai"; 
import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import AddItem from "./addItem";

export default function Product(){

   


    let sampleArr = [
        {
          "name": "Samsung Galaxy S24",
          "category": "Smartphone",
          "description": "Latest Samsung flagship smartphone with advanced AI features.",
          "specification": "6.2-inch display, 8GB RAM, 128GB storage",
          "features": "5G connectivity, 50MP camera, 4000mAh battery",
          "brand": "Samsung",
          "model_Number": "S24-128GB",
          "price": "999",
          "quantity_Stock": 50,
          "warenty_Period": "2026-02-11T00:00:00.000Z",
          "brand_image": "https://example.com/samsung-logo.png",
          "Image": "https://example.com/samsung-s24.png",
          "created_at": "2024-02-11T10:00:00.000Z"
        },
        {
          "name": "Apple MacBook Pro 16",
          "category": "Laptop",
          "description": "High-performance laptop with Apple M3 Pro chip.",
          "specification": "16-inch Retina Display, 32GB RAM, 1TB SSD",
          "features": "M3 Pro Chip, Touch Bar, macOS Ventura",
          "brand": "Apple",
          "model_Number": "MBP16-1TB",
          "price": "2499",
          "quantity_Stock": 30,
          "warenty_Period": "2027-01-15T00:00:00.000Z",
          "brand_image": "https://example.com/apple-logo.png",
          "Image": "https://example.com/macbook-pro-16.png",
          "created_at": "2024-01-15T12:30:00.000Z"
        },
        {
          "name": "Sony WH-1000XM5",
          "category": "Headphones",
          "description": "Industry-leading noise-canceling wireless headphones.",
          "specification": "Bluetooth, 30-hour battery life, Adaptive Sound Control",
          "features": "Active noise cancellation, Touch controls, Fast charging",
          "brand": "Sony",
          "model_Number": "WH1000XM5",
          "price": "399",
          "quantity_Stock": 100,
          "warenty_Period": "2025-12-01T00:00:00.000Z",
          "brand_image": "https://example.com/sony-logo.png",
          "Image": "https://example.com/sony-wh1000xm5.png",
          "created_at": "2023-12-01T08:45:00.000Z"
        },
        {
          "name": "Dell XPS 13",
          "category": "Laptop",
          "description": "Ultra-thin and powerful laptop with 13.4-inch touchscreen.",
          "specification": "Intel Core i7, 16GB RAM, 512GB SSD",
          "features": "InfinityEdge Display, Backlit keyboard, Windows 11",
          "brand": "Dell",
          "model_Number": "XPS13-512GB",
          "price": "1299",
          "quantity_Stock": 25,
          "warenty_Period": "2026-06-30T00:00:00.000Z",
          "brand_image": "https://example.com/dell-logo.png",
          "Image": "https://example.com/dell-xps13.png",
          "created_at": "2024-06-30T14:20:00.000Z"
        },
        {
          "name": "Bose SoundLink Revolve+",
          "category": "Speakers",
          "description": "Portable Bluetooth speaker with 360-degree sound.",
          "specification": "Wireless, 17-hour battery life, Water-resistant",
          "features": "360° sound, Voice assistant support, Built-in mic",
          "brand": "Bose",
          "model_Number": "SLRPlus",
          "price": "299",
          "quantity_Stock": 75,
          "warenty_Period": "2025-09-20T00:00:00.000Z",
          "brand_image": "https://example.com/bose-logo.png",
          "Image": "https://example.com/bose-soundlink.png",
          "created_at": "2023-09-20T09:10:00.000Z"
        }
      ]

      const [items,setItem] = useState(sampleArr)
      

    return(
    <div className="w-full h-screen flex flex-col ">
    
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
      <th className="p-3 border border-gray-300">Image</th>
    </tr>
    </thead>

  <tbody>
    {items.map((product, index) => (
      <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-purple-100">
        <td className="p-3 border border-gray-300">{index + 1}</td>
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
        <td className="p-3 border border-gray-300">
          <img src={product.Image} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
        </td>
        </tr>
        ))}
    </tbody>
    </table>


        


            
           
        </div>
    )
}