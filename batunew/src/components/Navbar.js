import React from "react";
import "../components/NavbarStyles.css";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <div className="header">
            <Link to="/">
                <h1>BS</h1>
            </Link>
        </div>
    )
}
export default Navbar;