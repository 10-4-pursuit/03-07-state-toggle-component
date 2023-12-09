import React, { useState } from 'react';

function ToggleSwitch() {
    const [mode, setMode] = useState(false)

    const toggle = () => {
        setMode(!mode);
    }

    return (
        <div>
            <p>{mode ? 'On' : 'Off'}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

export default ToggleSwitch