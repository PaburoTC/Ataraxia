import React from "react";
import './Project.scss';

const Project = props => {
    return(
        <div className="project">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <div>{props.likes}</div>
        </div>
    )
}

export default Project;
