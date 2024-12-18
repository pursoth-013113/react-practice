import React from "react";
import { useState } from "react";
import axios from "axios"; 

const Create = () => {
    const initalState = {
        productName: "",
        price: "",
        rateing: "",
    };      
    const [formData, setFormData] = useState(initalState);

    const handleChange = (event ) => {
        console.log("name:" + event.target.name, "value:" + event.target.value);
        const {name, value} = event.target;

        setFormData((prevState) => ({...prevState, [name]: value }));
    };  

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('' ,)
    };          

    // console.log(formData, "fromData")

    return(
        <div className="w-full h-screen flex flex-col gap-6 justify-center items-center">
            <h1 className="text-xl">Create Component </h1>
            <form onSubmit={handleSubmit}
             onReset={() => setFormData(initalState)} 
             className="flex flex-col gap-3"
             >
                <input type="text"
                value={formData.productName}
                placeholder="productName"
                name= "productName"
                // onChange={(e) => 
                //     setFormData({...formData, userName: e.target.value})}
                onChange={handleChange}
                className="p-2 border border-gray-500 outline-none rounded "
                 />

                <input type="number"
                value={formData.number}
                placeholder="number"
                name= "price"
                // onChange={(e) => 
                //     setFormData({...formData, email: e.target.value})}
                onChange={handleChange}
                className="p-2 border border-gray-500 outline-none rounded "
                 />

                <input type="text"
                value={formData.rateing}
                // onChange={(e) => 
                //     setFormData({...formData, password:e.target.value})}
                onChange={handleChange}
                placeholder="rating"
                name = "rateing"
                className="p-2 border border-gray-500 outline-none rounded "
                 />
         <div className="flex gap-2">
                    <button type="reset" className="w-1/2 px-3 py-1.5 rounded text-white bg-blue-500 hover:opacity-85">
                    reset
                    </button>
                    <button type="submit" className="w-1/2 px-3 py-1.5 rounded text-white bg-blue-500 hover:opacity-85">
                    Submit
                    </button>
                 </div>
            </form>
      </div>

    );
};

export default Create;