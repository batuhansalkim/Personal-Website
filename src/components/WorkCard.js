
import React from "react";
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";


const WorkCard = ({imgsrc,title,text,view}) => {
    return (
        <div className="project-card">
            <img src={imgsrc} alt="image" />
            <h2 className="project-title">{title }</h2>
            <div className="pro-details">
                <p>{text}</p>
                <div className="pro-btns">
                    <NavLink target="_blank" to={view} className="btn">
                        View
                    </NavLink>
                    <NavLink target="_blank" to="https://www.google.com/" className="btn">
                        Source
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;