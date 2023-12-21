import React from 'react';

function ToggleSwitch() {
    const [toggle, setToggle] = React.useState("on"); 
    return (
    <div>
        <h1>Accept Cookies </h1>
        <button onClick={()=>setToggle(toggle === "on" ? "off" : "on") }>{toggle}</button>
        </div>
        )
}

export default ToggleSwitch;