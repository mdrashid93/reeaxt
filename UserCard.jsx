import React from "react";
const UserCard=(props)=>{
    return(
        <div className="user-container" style={props.style}>
            <p id='titile'>{Props.name}</p>
            <img id='user-image' src={props.image} alt="love"></img>
            <p id='user-desc'>{props.desc} </p>
        </div>
    )
}
export default UserCard