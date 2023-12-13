import {useState} from 'react'

function ToggleSwitch() {
    const [on, setOn] = useState(false);
    return (
        <div>
            <button onClick={() => setOn(!on)}>
                {on ? 'ON' : 'OFF'}
            </button>
        </div>
    )

}



export default ToggleSwitch