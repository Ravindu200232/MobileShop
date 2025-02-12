import logo from "/—Pngtree—smartphone shop sale logo design_5069958.png"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <div className=" w-full h-[100px] flex flex-wrap  bg-white relative justify-center items-center shadow-xl ">
            <div className=" w-[100px] h-[100px] bg-blue-300 object-cover">
                <img src={logo} className="w-full h-full"></img>
            </div>
            <div className="flex justify-around items-center h-full w-[calc(100vh/2)] bg-white ">
                <div className="w-[calc(100vh/2.2)] h-10 rounded-xl justify-start items-center bg-gray-200  flex" >
                <CiSearch className="size-6 ml-5"/>
                <input type="text" className="ml-2  bg-gray-200 outline-none border-none"></input>
                </div>
                

            </div>

            <div className="w-[calc(100vh/2)] h-full bg-white flex justify-between items-center hidden sm:flex">
                <tr>
                    <td><button className="ml-2 hover:text-gray-400">Home</button></td>
                    <td><button className="ml-5  hover:text-gray-400">Product</button></td>
                    <td><button className="ml-5  hover:text-gray-400">About</button></td>
                    <td><button className="ml-5  hover:text-gray-400">ContactUs</button></td>
                    <td><button className="ml-5  hover:text-gray-400">Blog</button></td>
                </tr>

            </div>

            <div className="h-full w-[calc(100vh/4)]  bg-white flex justify-between items-center hidden sm:flex">
                <tr>
                    <td><button className="ml-5 hover:text-gray-400"><CiHeart className="size-8"/></button></td>
                    <td><button className="ml-5  hover:text-gray-400"><CiShoppingCart className="size-8"/></button></td>
                    <td><Link to="/login"><button className="ml-5  hover:text-gray-400"><CiUser className="size-8"/></button></Link></td>
                   
                </tr>

            </div>
            

        </div>
    )
}