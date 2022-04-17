import React from 'react';

const TopBar = ({scrolled}) => {
    let barClasses = [`d-flex align-items-center fixed-top`];
    if (scrolled) {
        barClasses.push('scrolled')
    }


    return (
        <div id="topbar" className={barClasses.join(" ")}>
            <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
                <div className="align-items-center d-none d-md-flex">
                    <i className="bi bi-clock"/> Monday - Sunday, 7AM to 10PM
                </div>
                <div className="d-flex align-items-center">
                    <i className="bi bi-phone"/> Call us now +254 702356422
                </div>
            </div>
        </div>

    );
};

export default TopBar;