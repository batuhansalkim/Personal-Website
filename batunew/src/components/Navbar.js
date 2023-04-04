import React from "react";
import "../components/NavbarStyles.css";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <div className="header">
            <Link to="/">
                <h1>BS</h1>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="project">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;