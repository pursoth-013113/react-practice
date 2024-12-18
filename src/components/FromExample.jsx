import React from "react";
import { useState } from "react";


const FromExample = () => {
    const [userName, setuserName] = useState("pursoth");
    const [Email_id, setEmail] = useState("pursothamanpaswang@gmail.com")
    const [password, setPassword] = useState("Gd@123456");
   

    const handleUsername = (event) => {
        setuserName(event.target.value)        
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)  
    }

    const handleSubmit = () => {
        console.log(userName, Email_id, password)
    }
    return(
        <div className=" w-full h-screen flex flex-col justify-center items-center">
        <input type="text" value={userName} onChange={handleUsername} 
        className="border border-red-500 outline-none rounded " />

        <input type="text" value={Email_id} onChange={handleEmail} 
        className="border border-red-500 outline-none rounded " />

        <input type="text" value={password} onChange={handlePassword} 
        className="border border-red-500 outline-none rounded " />

        <button onClick={handleSubmit} className="px-4 py-2 bg-red-500 rounded">Submit</button>
        </div>
        
    )

}


export default  FromExample;
