import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../NavComp/About";
import Contacts from "../NavComp/Contact";
import Service from "../NavComp/Service";
import Sidebar from "../NavComp/Sidebar";
import Home from "./Home";
import DashBoard from "../SideBarComp/DashBoard";
import Profile from "../SideBarComp/Profile";
import Register from "../SideBarComp/Register";
import Catgories from "../SideBarComp/Catgories";
import Setting from "./setting";
import CounterApp from "./CounterAPP";
import Change from "./Change";
import ListAndKey from "./ListsAndKeys";
import Project from "../Project/Task";
import FormExample from "./FromExample";
import Create from "../CRUD operation/Create";









const Routers = () => {
    return(
        <div>   
       <div className="w-full ">
       
        {/* <Navbar /> */}
        <Routes>
                 
            <Route path="/"  element={<h1>Index Comp</h1>} />

            <Route path="/nav" element ={<Home />  }>
            <Route index  element= {<h1>Home</h1>}  />
            <Route path="/nav/about" element={<About />} />


            <Route path="/nav/sidebar" element={<Sidebar  />} >
            <Route index element={<DashBoard />} />
            <Route path="/nav/sidebar/profile" element={<Profile  />} />
            <Route path="/nav/sidebar/register" element={<Register />} />
            <Route path="/nav/sidebar/catgories" element={<Catgories />} />

            </Route>
            

            <Route path="/nav/contact" element={<Contacts />} />
            <Route path="/nav/service" element={<Service />} />
            </Route>

            <Route path="/setting/:id" element={<Setting/>} />

            <Route path= "/function" element= {<CounterApp  />} />
            <Route path= "/listkeys" element={<ListAndKey/> }/>

            <Route path= "/nav/class" element= {<Change/> } />

            <Route path= "/create" element= {<Create/> } />



            <Route path="card" element= {<Project/>}/>

            <Route path="inputelement" element= {<FormExample/>}/>
                    
            <Route path="*" element={<h1>Page not found 404</h1>} /> 

        </Routes>  
        
        </div>
       </div>
    );
};

export default Routers;