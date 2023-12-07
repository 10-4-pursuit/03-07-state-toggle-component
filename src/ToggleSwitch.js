import React,  {useState} from "react";

function ToggleSwitch() {
    const [toggle, setSwitch] = useState(true)
    return (
        <div>
        <h2>Switch</h2>
        <button onClick={() => setSwitch(!toggle)}>{toggle ? `ON` : `OFF`}</button>
        </div>
    );
}

export default ToggleSwitch;