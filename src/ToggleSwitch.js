import React, {useState} from "react";
import './ToggleSwitch.css';

const ToggleSwitch = () => {
	const[on, setOn] = useState(false);
	const toggleSwitch = () =>{
		setOn((previousValue) => !previousValue); 

	}
	return(
	<div>
		<p style={{ fontSize: '100px', color: on ? 'green' : 'red' }}>{on ? 'on': 'off'}</p>
		<button className='myCustomButton' onClick={toggleSwitch}>Press Me </button>

	</div>	
	)
}

export default ToggleSwitch;