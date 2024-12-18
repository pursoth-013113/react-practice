import React from "react";
import SideMenuComp from "../SideBarComp/SideMenuComp";
import { Outlet } from "react-router-dom";

const  Sidebar = () => {
    return(
        <div className="w-full h-full flex p-4">
            <SideMenuComp />
            <div className="flex-1 h-full flex justify-center items-center ">
                <Outlet/>
            </div>

        </div>
    )
}

export default Sidebar;