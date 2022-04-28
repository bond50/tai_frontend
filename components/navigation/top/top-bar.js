import React from 'react';
import classes from './topbar.module.css'

const TopBar = ({scrolled}) => {


    return (
        <div className={` ${classes.topBar} ${scrolled ? 'scrolled' : ''}`}>
            <div className="container d-flex align-items-center  justify-content-between ">
                <div className="align-items-center d-flex ">
                    <i className="bi bi-clock"/>
                    <span>Monday - Sunday, 7AM to 10PM</span>
                </div>
                <div className={`${classes.link}`}>
                    <i className="bi-envelope-open"/>
                    <a href="mailto:info@tailifestyle.co.ke?cc=tailifestyle01@gmail.com" target="_blank"
                       rel="noopener noreferrer"><span>info@tailifestyle.co.ke</span>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default TopBar;