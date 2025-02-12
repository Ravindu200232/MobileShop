export default function AdminProfile(){

    const token = localStorage.getItem("token")
    

    return(
        <div className="h-screen w-full flex flex-col mt-10 items-center">
            <div>
               <img src="/profile.png" className="object-cover w-[200px] h-[200px] rounded-full shadow-xl
               "></img>
            </div>

            <div className="w-[800px] h-full flex flex-col p-20 shadow-2xl rounded-lg mt-10">
                <label>First Name</label>
                <input type="text" className="rounded-lg h-[40px] mt-3 mb-4 shadow-xl border-[2px] pl-4" readOnly value={"Ravindu"}></input>
                <label>Last Name</label>
                <input type="text" className="rounded-lg h-[40px] mt-3 mb-4  shadow-xl border-[2px] pl-4" readOnly value={"Ravindu"}></input>
                <label>Email</label>
                <input type="text" className="rounded-lg h-[40px] mt-3 mb-4 shadow-xl border-[2px] pl-4" readOnly value={"Ravindu"}></input>
                <label>Phone</label>
                <input type="text" className="rounded-lg h-[40px] mt-3 mb-4 shadow-xl border-[2px] pl-4" readOnly value={"Ravindu"}></input>
                
                
            </div>
          
        </div>
    )
}