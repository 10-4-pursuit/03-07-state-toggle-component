// ToggleSwitch.js
import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setOn] = useState(false);

  const handleToggle = () => {
    setOn(!isOn);
  };

  return (
    <div>
      <h2>{isOn ? 'On' : 'Off'}</h2>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default ToggleSwitch;
