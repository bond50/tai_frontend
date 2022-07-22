import React from 'react';
import classes from './topbar.module.css'

const TopBar = ({scrolled}) => {
    let barClasses = [`d-flex align-items-center fixed-top`];
    if (scrolled) {
        barClasses.push('scrolled')
    }

    return (

        <div className={` ${classes.topBar} ${barClasses.join(" ")}`}>
            <div className="container d-flex justify-content-between">
                <div className={classes.contactInfo}>
                    <i className="bi bi-clock"/><span>Monday - Sunday, 7AM to 10PM</span>
                    <span className='d-flex d-md-none flex-wrap flex-row'>
                        <i className="bi bi-envelope "/>
                        <a href="mailto:info@tailifestyle.co.ke?cc=tailifestyle01@gmail.com"
                           target="_blank"
                           rel="noopener noreferrer">info@tailifestyle.co.ke</a>
                    </span>
                </div>
                <div className={`d-none d-md-flex ${classes.socialLinks} align-items-center `}>
                    <a className="bi-envelope-open-fill"
                       href="mailto:info@tailifestyle.co.ke?cc=tailifestyle01@gmail.com" target="_blank"
                       rel="noopener noreferrer"><span className='mx-1'>info@tailifestyle.co.ke</span>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default TopBar;

