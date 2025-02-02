
import { useState } from "react";
import "../css/login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:4000/api/user/login",{
            email : email,
            password : password
        }).then((res)=>{
            const role =  res.data.user.role
            if(role == "admin"){
                navigate("/")
            }else{
                navigate("/")
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className="bg-picture w-full h-screen  flex justify-center items-center ">
            <form onSubmit={handleOnSubmit}>
                <div className="w-[450px] h-[500px]  flex flex-col justify-center items-center backdrop-blur-xl rounded-2xl relative">
                    <img src="/—Pngtree—smartphone shop sale logo design_5069958.png" className="w-[100px] h-[100px] absolute top-5 rounded-full shadow-2xl shadow-white"></img>

                    <input type="email" placeholder="Email" className="w-[300px] h-[30px] bg-transparent border-b-2 border-white mt-6 text-xl"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                        console.log(e)
                        
                    }}></input>

                    <input type="password" placeholder="Password" className="w-[300px] h-[30px] bg-transparent border-b-2 mt-6 border-white text-xl"
                    onChange={(e)=>{
                        setPassword(e.target.value)
                       
                    }}></input>

                    <button className="bg-[#0ba1af] w-[300px] h-[40px] rounded-xl mt-6" onClick={Login}>Login</button>
                </div>
            </form>
            
        </div>

    )
}