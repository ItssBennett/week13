import React from "react";



export default class NavBar extends React.Component{
render(){
    return <nav className="nav container-fluid">
        
            <a href="/" className="site-title">Site Name</a>
            <ul className="Nav1">
                <li><a href="/">Link 1</a></li>
                <li><a href="/">Link 2</a></li>
                <li><a href="/">Link 3</a></li>
            </ul>
            </nav>
    
}
}