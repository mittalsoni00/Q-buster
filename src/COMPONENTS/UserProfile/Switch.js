import React from "react";
import "./Switch.css"
import cx from "classnames";
import { constSelector } from "recoil";
const Switch =({rounded=false}) =>{

    const Switch=cx('slider', {
        'rounded':rounded
    });

    return( 
    <label className="switch">
         <input type="checkbox" />
         <span className="slider rounded"/>
        </label>
    );
};
export default Switch;

// , isToggled, onToggled
// checked={isToggled} onChange={onToggled}
// {sliderCX}

