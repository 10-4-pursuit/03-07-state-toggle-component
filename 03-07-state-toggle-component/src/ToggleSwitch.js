

import React, { useState } from 'react';

const ToggleSwitch = () => {
  // State to manage the toggle switch
  const [isOn, setOn] = useState(false);

  // Function to toggle the state
  const toggleSwitch = () => {
    setOn(!isOn);
  };

  return (
    <div>
      <p>{isOn ? 'On' : 'Off'}</p>
      <button onClick={toggleSwitch}>Toggle</button>
    </div>
  );
};

export default ToggleSwitch;
