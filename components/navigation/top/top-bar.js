import React from 'react';
import classes from './topbar.module.css'

const TopBar = ({scrolled}) => {
    let barClasses = [`d-flex align-items-center fixed-top`];
    if (scrolled) {
        barClasses.push('scrolled')
    }


    return (
        <div className={` ${classes.topBar} ${barClasses.join(" ")}`}>
            <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
                <div className="align-items-center  d-flex">
                    <i className="bi bi-clock"/>  <span>Monday - Sunday, 7AM to 10PM</span>
                </div>
                <div className={`d-flex  align-items-center ${classes.link}`}>
                    <a className="bi-envelope-open-fill"
                       href="mailto:info@tailifestyle.co.ke?cc=tailifestyle01@gmail.com" target="_blank"
                       rel="noopener noreferrer"><span>info@tailifestyle.co.ke</span></a>
                </div>
            </div>
        </div>

    );
};

export default TopBar;