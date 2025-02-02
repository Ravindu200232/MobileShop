
import { useState } from "react"
import "../css/login.css"
export default function SignUp(){

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [repassword,setRePassword] = useState("");
    const [file,setFile] = useState("");

    function handlePassword(e){
        let password = e.target.value
        setPassword(password)
    }
    
    function handleRePassword(e) {

        let value = e.target.value
        if(password === value){
            document.getElementById("showerr").innerHTML = "Match password";
            document.getElementById("showerr").style.color = "green"; 
        }else{
            document.getElementById("showerr").innerHTML = "Dismatch password"
            document.getElementById("showerr").style.color = "red";
        }
        setRePassword(value)
        
    }
    

    function handleFirstName(e){
        let value = e.target.value.replace(/[^a-zA-Z\s]/g , "");
        setFirstName(value)
    }

    function handleLastName(e){
        let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
        setLastName(value)
    }

    function handlePhoneChange(e){
        let value = e.target.value.replace(/[^\d+]/g,"");//remove non-numerical chareter
        if(value.length>10){
            value = value.slice(0,20);//restric input to 10 digits
        }
        setPhone(value)
    }

    function handleEmail(e){
        let value = e.target.value.replace(/[^a-zA-Z0-9@]/g , "");
        setEmail(value)
    }

    return(


        <div className="bg-picture w-full h-screen flex justify-center items-center">
           <form>
           <div className="w-[400px] h-[600px] backdrop-blur-2xl rounded-2xl flex flex-col  items-center relative">
                <img src="/—Pngtree—smartphone shop sale logo design_5069958.png" className="w-[100px] h-[100px] absolute top-5 rounded-full shadow-2xl shadow-white"></img>
            
                <input type="text" placeholder="First Name" className="w-[300px] h-[30px] bg-transparent placeholder-gray-300 text-white border-b-2 border-white text-xl mt-48"
                onChange={(e)=>{
                    handleFirstName(e)
                }} value={firstName}></input>
                <input type="text" placeholder="Last Name" className="w-[300px] h-[30px]  placeholder-gray-300 bg-transparent border-b-2 border-white text-xl mt-3"
                onChange={(e)=>{
                    handleLastName(e)
                }} value={lastName}></input>
                <input type="email" placeholder="Email" className="w-[300px] h-[30px]  placeholder-gray-300 bg-transparent border-b-2 border-white text-xl mt-3"
                onChange={(e)=>{
                    handleEmail(e)
                }} value={email}></input>
                <input type="text" placeholder="Phone Number" className="w-[300px] h-[30px]  placeholder-gray-300 bg-transparent border-b-2 border-white text-xl mt-3"
                onChange={(e)=>{
                    handlePhoneChange(e)
                }} value={phone}></input>
                <input type="file" placeholder="Profile Image" className="w-[300px] h-[30px] placeholder-gray-300 bg-transparent border-b-2 border-white text-xl mt-3" 
                onChange={(e)=>{
                    setFile(e);
                }} value={file}></input>
                <input type="password" placeholder="Password" className="w-[300px] h-[30px] placeholder-gray-300 bg-transparent border-b-2 border-white text-xl mt-3"
                onChange={(e)=>{
                    handlePassword(e)
                }} value={password}></input>
                <p id="showerr" className="font-bold"></p>
                <input type="password" placeholder="Re-Password" className="w-[300px] h-[30px] placeholder-gray-300 bg-transparent border-b-2 border-white text-xl mt-3"
                 value={repassword} onChange={(e)=>{
                    handleRePassword(e)
                 }}></input>
                <button className="bg-[#27aae2] rounded-xl w-[300px] h-[40px] mt-5 shadow-xl hover:bg-[#048f9e]">Create Account</button>
            
            </div>
           </form>
        </div>
    )
}