import React from "react";
import SideBar from "../SideBar/SideBar";
// import Profile from "../Perfil/Perfil";
import Dashboard from "../Dashboard/Dashboard";

const Home = () =>{
    return (
    <div className="h-screen flex">
       <SideBar/>
       <Dashboard/>
    </div>)
};

export default Home;
