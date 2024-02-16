import React, { useState } from 'react';

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(true);
    const status = isOn ? "on" : "off";
    
    const onButtonClick = () => { 
        setIsOn(!isOn)
    }

    return (
    <div>
        <button onClick={ onButtonClick }>The Hot Button</button>
        <h1> {status} </h1>
    </div>

    )
}



export default ToggleSwitch;