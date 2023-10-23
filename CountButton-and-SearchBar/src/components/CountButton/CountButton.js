import React, { useState } from "react"
import "./CountButton.css"

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClik =() => {
        setCurrentCount(currentCount+props.incrementBy)
    }
    return(
        <div>
            <button className="button-display1" onClick={handleClik}>+{props.incrementBy}</button>
            <div className="count-display">{currentCount}</div>
        </div>


    )
}

export default CountButton