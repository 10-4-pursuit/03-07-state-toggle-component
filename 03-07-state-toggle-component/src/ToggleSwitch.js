import { useState } from "react";

function ToggleSwitch() {
    const [state, setState] = useState(false);
const onToggleClick = () => setState(!state)
return (
    <div>
        <h1>{state ? "ON" : "OFF"}</h1>
        <button onClick= {onToggleClick}>Toggle</button>
    </div>
)} 


export default ToggleSwitch;