import React, {useState} from 'react'

function ToggleSwitch() {
    const [isToggled, setIsToggled] = useState(false)

    const toggleFunction = () => {
        setIsToggled(!isToggled)
    }
  return (
    <div>
        <button onClick= {toggleFunction}>Toggle Switch</button>
        <p>{isToggled ? "On" : "Off"}</p>
    </div>
  )
}

export default ToggleSwitch