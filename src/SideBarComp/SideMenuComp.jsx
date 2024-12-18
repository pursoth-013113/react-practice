import React from "react";
import { Link } from "react-router-dom";

const  SideMenuComp = () => {
    return(
  
             <div className="w-20 h-full flex  flex-col gap-5 ">
            <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
                <Link to={'/nav'}>Home</Link>
            </span>
            <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
                <Link to={'/nav/Sidebar'}>Sidebar</Link>
            </span>
            <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
                <Link to={'/nav/about'}>About</Link>
            </span>
            <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
                <Link to={'/nav/contact'}>Contact</Link>
            </span>
            <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
                <Link to={'/nav/service'}>Service</Link>
            </span>
        </div>
        
    )
}

export default SideMenuComp;