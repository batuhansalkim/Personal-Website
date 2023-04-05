import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} className="into-img" alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A BATUHAN SALKIM</p>
            <h1>WEB - MOBİLE DEVELOPER</h1>
            <div>
                <Link to="/project"></Link>
                <Link to="/contact"></Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg