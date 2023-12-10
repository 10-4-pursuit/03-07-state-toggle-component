import React, { useState } from'react';

const ToggleSwitch = ({ onToggle }) => {
    const [state, setState] = useState(false); // Initial state is "Off"
  
    const handleClick = () => {
      setState(!state); // Toggle state on click
      onToggle && onToggle(!state); // Call provided callback with new state
    };
  
    return (
      <button type="button" onClick={handleClick}>
        {state ? 'Destroy' : 'Build'}
      </button>
    );
  };
  
  export default ToggleSwitch;
