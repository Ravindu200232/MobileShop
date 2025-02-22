import { BiLogOut } from "react-icons/bi"; 
import { CgProfile } from "react-icons/cg"; 
import { BiMessageAltError } from "react-icons/bi"; 
import { MdOutlineRateReview } from "react-icons/md"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { AiOutlineProduct } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./product";
import UserDetails from "./userdetails";
import ReviewDetails from "./reviewDetails";
import InquiryDetails from "./inquiryDetails";
import AdminProfile from "./adminProfile";
import AddItem from "./addItem";
import ProductUpdate from "./productUpdate";
export default function AdminHomePage(){

    return(
        <div className="h-screen w-full flex flex-col">
            {/* adminprofile */}
           <div className="h-[100px] w-full bg-white flex flex-row items-center justify-center fixed shadow-xl">
            <h1><CgProfile className="mr-20 text-[50px]"/></h1>
            <h1 className="text-[20px]">Mr ravindu Bandara</h1>
           </div>
           <div className="h-[calc(100vh-100px)] w-full flex flex-row">

                {/* adminToolbar */}
           <div className="h-screen w-[100px] bg-white flex flex-col items-center text-[40px]  fixed">
                <Link to="/admin/item">
                    <AiOutlineProduct className="hover:text-[#a24af8] hover:animate-spin mt-8 shadow-xl rounded-lg bg-gray-200 p-2 cursor-pointer" size={40} />
                </Link>

                <Link to="/admin/userDetails">
                    <AiOutlineUser className="hover:text-[#a24af8] mt-8 shadow-xl hover:animate-spin rounded-lg bg-gray-200 p-2 cursor-pointer" size={40} />
                </Link>

                <Link to="/admin/reviewDetails">
                    <MdOutlineRateReview className="hover:text-[#a24af8] mt-8 shadow-xl hover:animate-spin rounded-lg bg-gray-200 p-2 cursor-pointer" size={40} />
                </Link>

                <Link to="/admin/inquireDetails">
                    <BiMessageAltError className="hover:text-[#a24af8] mt-8 shadow-xl hover:animate-spin rounded-lg bg-gray-200 p-2 cursor-pointer" size={40} />
                </Link>

                <Link to="/logout">
                    <BiLogOut className="hover:text-[#a24af8] mt-8 absolute bottom-10 right-1/3 hover:animate-spin shadow-xl rounded-lg bg-gray-200 p-2 cursor-pointer" size={40} />
                </Link>
           </div>

           <div className="h-screen w-[calc(100%-100px)] mt-[100px] ml-[100px]">
            <Routes>
                <Route path="/" element={<AdminProfile/>}/>
                <Route path="/item" element={<Product/>}/>
                <Route path="/userDetails" element={<UserDetails/>}/>
                <Route path="/reviewDetails" element={<ReviewDetails/>}/>
                <Route path="/inquireDetails" element={<InquiryDetails/>}/>
                <Route path="/item/additem/*" element={<AddItem/>}/>
                <Route path="/item/update/*"element={<ProductUpdate/>}/>
            </Routes>
           </div>
           </div>
            
        </div>
    )

}