import React from 'react';
import Item from "./item";
import useToggle from "../../hooks/useToggle";

const CustomDropdown = ({text, children, nested}) => {
    const [open, toggleClosed] = useToggle();
    return (
        <li className={`dropdown`} onClick={toggleClosed}>
            <a href="#"><span>{text}</span>
                <i className={`bi bi-chevron-${nested ? "right" : "down"}`}/>
            </a>
            <ul className={`${open ? 'dropdown-active' : null}`}>
                {children}
            </ul>
        </li>
    );
};

export default CustomDropdown;