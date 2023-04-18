import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import "./WorkCardStyles.css";

import React from "react";


const Work = () => {
    return (
        <div className="work-container">
            <div className="project-heading">Projects</div>
            <div className="project-container">
                {
                    WorkCardData.map((val,index)=>{
                        return(
                            <WorkCard
                            key={index}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work;