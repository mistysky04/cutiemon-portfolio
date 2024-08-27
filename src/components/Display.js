import React from "react";
import Controls from './Controls.js'
import Logo from './Logo.js'

const Display = () => {
    return (
        <>
            <div className= "Display">
                <Controls />
                <Logo />
            </div>
        </>
    );
};

export default Display