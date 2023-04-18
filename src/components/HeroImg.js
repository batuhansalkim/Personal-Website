import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro1.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} className="intro-img" alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A BATUHAN SALKIM</p>
            <h1>WEB - MOBİLE DEVELOPER</h1>

            <div className="button">
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
            
        </div>
    </div>
  )
}

export default HeroImg