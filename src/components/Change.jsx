import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Change = () => {
   const navigate = useNavigate();
  
  const data = "Data fom Index  component";

  const role = "user";

    const handleNavigate = () => {
     if( role === "user"){
        navigate('/function', {state: data});
     }else{
        navigate('/class');

     }
    };
    return(
       <div className="w-full h-scrren flex justify-center items-center gap-4">
        <Link to ={'/function'} state={data}>Navigate with Link Element</Link>
        <button onClick={handleNavigate}>Navigate with  UseNavigate Hook </button>
       </div>
    )
}

export default Change;