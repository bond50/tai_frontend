import React, {useEffect, useState} from 'react';
import Logo from "./Logo";
import Nav from "./nav";
import classes from '../../styles/Header.module.css'

const Header = ({scrolled}) => {
    let navbarClasses = [`${classes.header} fixed-top`];
    if (scrolled) {
        navbarClasses.push(classes.scrolled)
    }

    return (
        <header className={navbarClasses.join(" ")}>
            <div className='container d-flex align-items-center justify-content-between'>
                <Logo/>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;