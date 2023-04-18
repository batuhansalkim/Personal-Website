import "./WorkCardStyles.css";

import React from "react";
import pro1 from "../assets/programming-concept-illustration_114360-1351.avif";
import { NavLink } from "react-router-dom";

const WorkCard =()=>{
    return(
        <div className="work-container">
            <div className="project-heading">Projects</div>
            <div className="project-container">
                <div className="project-card">
                    <img src={pro1} alt="image" />
                    <h2 className="project-title">Project Title</h2>
                    <div className="pro-details">
                        <p>This is text </p>
                        <div className="pro-btns">
                            <NavLink target="_blank" to="https://www.youtube.com/" className="btn">
                                View
                            </NavLink>
                            <NavLink target="_blank" to="https://www.google.com/" className="btn">
                                Source
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;