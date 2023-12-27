
import React from 'react';

function ToggleSwitch() {
    const [toggle, setToggle] = React.useState("off");
    return (
        <div>
            <h1>{toggle}</h1>
            <button onClick={() => setToggle("off")}>Off</button>
            <button onClick={() => setToggle("on")}>On</button>
        </div>
    );
}

export default ToggleSwitch;