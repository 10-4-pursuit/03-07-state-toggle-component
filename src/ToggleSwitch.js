import { useState } from "react";

function ToggleOnToggleOff() {
    const [isOn, setOn] = useState(false);

    const handleToggle = () => {
        setOn(!isOn);
      };
    

    return (
        <div>
            <h2>LightSwitch</h2>
            <p>{isOn ? 'On' : 'Off'}</p>
            <button onClick={handleToggle}>Switch</button>
        </div>
    )
}

export default ToggleOnToggleOff;