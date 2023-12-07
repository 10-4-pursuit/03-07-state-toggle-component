import React,  {useState} from "react";
import "./ToggleSwitch.css"

function ToggleSwitch() {
    const [toggle, setSwitch] = useState(true)
    return (
        <div>
        <h2>Switch</h2>
        <div onClick={() => setSwitch (!toggle)} className={`slider-container ${toggle ? "on" : "off"}`}>
            <div className="slider">{toggle ? `ON` : `OFF`}</div>
        </div>
        </div>
    );
}

export default ToggleSwitch;