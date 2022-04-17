import React from 'react';
import Link from "next/link";

const Item = ({to, active, children, clicked,className}) => {
    return (
        <li>
            <Link href={to}>
                <a className={`nav-link ${active ? 'active' : null} ${className}`} onClick={clicked}>{children}</a>
            </Link>
        </li>
    );
};

export default Item;