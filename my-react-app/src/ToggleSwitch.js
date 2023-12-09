import { useState } from 'react'; // Hook
function ToggleSwitch() {
    const [on, setState] = useState(false);
    return (
        <div>
            <button
                onClick={() => setState(!on)}
                style={{ backgroundColor: on ? 'green' : 'red' }}
            >
                {on ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}

export default ToggleSwitch