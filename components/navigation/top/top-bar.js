import React from 'react';
import classes from './topbar.module.css'

const TopBar = ({scrolled}) => {
    let barClasses = [`d-flex align-items-center fixed-top`];
    if (scrolled) {
        barClasses.push(classes.scrolled)
    }

    return (

        <div className={` ${classes.topBar} ${barClasses.join(" ")}`}>
            <div className="container d-flex justify-content-between">
                <div className={classes.contactInfo}>
                    <i className="bi bi-clock "/><span>Monday - Sunday, 7AM to 10PM</span>
                </div>
            </div>
        </div>

    );
};

export default TopBar;

