import React from "react";
import Plus from '../assets/controller/plus.svg'

const Controls = () => {
    return (
        <div className="Controls">
            <div className= "Plus">
                <img src={Plus} alt="4-way Controller Pad"></img>
            </div>
            <div className="Buttons">
                <div className= "A-Button-Container">
                    <div className="A-Button">A</div>
                </div>
                <div className= "B-Button-Container">
                    <div className="B-Button">B</div>
                </div>
            </div>
        </div>
    )
}

export default Controls