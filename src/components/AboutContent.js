import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/fotobatu1.jpg";
import React2 from "../assets/fotobatu3.jpg";
import React from 'react'

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, excepturi! Sint modi accusantium quaerat neque!</p>
            <Link to="/contact">
            <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} alt="true" className="img" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} alt="true" className="img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent