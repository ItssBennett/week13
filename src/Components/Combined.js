import React from "react";
import NavBar from "./Navbar";
import Login from "./Login";

export default class NavLog extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <NavBar />
                <Login />
            </div>
        )
    }
}