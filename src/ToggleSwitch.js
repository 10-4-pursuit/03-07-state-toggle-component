import React from "react";

function ToggleSwitch() {
  const[count, setCount] = React.useState('on');

  return (
    <div>
    <h2>{count}</h2>
  <button onClick= {() => setCount ('off')}>OR</button>
    </div>
  );
}


export default ToggleSwitch;


