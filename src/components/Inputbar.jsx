import React from "react";

function Inputbar(props){
    return(
        <div className="text-input-bar">
            <label>{props.heading}</label>
            <input type={props.type} placeholder={props.placeholder}></input>
        </div>
    );
}

export default Inputbar;