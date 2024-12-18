import React from "react";
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation() 
        console.log(location.pathName);
    
    // return(
    //     <nav className="w-full h-20 flex justify-evenly items-center bg-blue-100">
    //         <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
    //             <Link to={'/nav'}>Home</Link>
    //         </span>
    //         <span className="">
    //             <Link to={'/nav/Sidebar'}>Sidebar</Link>
    //         </span>
    //         <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
    //             <Link to={'/nav/about'}>About</Link>
    //         </span>
    //         <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
    //             <Link to={'/nav/contact'}>Contact</Link>
    //         </span>
    //         <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
    //             <Link to={'/nav/service'}>Service</Link>
    //         </span>
    //     </nav>
    // )


    const NavData = [
        { pathName: "/nav", title: "Home"},
        { pathName: "/nav/sidebar", title: "Sidebar"},
        { pathName: "/nav/about", title: "About"},
        { pathName: "/nav/contact", title: "Contacts"},
        { pathName: "/nav/service", title: "Service"},
    ]; 
    return(
        <nav className="w-full h-20 flex justify-evenly items-center bg-blue-100">
            {NavData.map((val, index) => (
                <span
                key={index}
                className={`${
                    location.pathname === val.pathName
                    ? " bg-green-500 px-4 py-1.5 text-white rounded"
                    : " bg-blue-500 px-4 py-1.5 text-white rounded "
                }`} 
                >
                  <Link to={val.pathName}>{val.title}</Link>

                </span>
            ) )}
        </nav>
    );
};

export default Navbar;