import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setOn] = useState(false);

  const handleToggle = () => {
    setOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <p>{isOn ? 'On' : 'Off'}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default ToggleSwitch;