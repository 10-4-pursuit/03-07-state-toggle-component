import React, { useState } from 'react';

const ToogleSwitch = () => {
  const [on, setOn] = useState(false);

  return (
    <div>
    <h1>ToogleSwitch</h1>
      <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
      <p>{on ? 'ON' : 'OFF'}</p>

    </div>
  )
};

export default ToogleSwitch;
