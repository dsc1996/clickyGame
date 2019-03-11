import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <span onClick={() => props.scoring(props.name)} className="scoring">
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.name}/>
                </div>
            </div>
        </span>
    );
}

export default ImageCard;