import React, {useEffect, useState} from 'react';
import Logo from "./Logo";
import Nav from "./nav";

const Header = ({scrolled}) => {
    let navbarClasses = [`header fixed-top`];
    if (scrolled) {
        navbarClasses.push('scrolled')
    }

    return (
        <header id='header' className={navbarClasses.join(" ")}>
            <div className='container d-flex align-items-center justify-content-between'>
                <Logo />
                <Nav/>
            </div>
        </header>
    );
};

export default Header;