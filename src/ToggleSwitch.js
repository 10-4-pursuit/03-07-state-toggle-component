import React, {useState} from "react";


function ToggleSwitch() {
    const [isToggled, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!isToggled);
    }

    return (
        <div>
            <h2>{isToggled ? 'On' : 'Off'}</h2>
            <button onClick={() => setToggle(handleToggle)}>Switch</button>
        </div>
    )
}

export default ToggleSwitch;