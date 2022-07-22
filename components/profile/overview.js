import React from 'react';
import classes from './overview.module.css'
import Link from "next/link";

const Overview = ({username, name, about, address, companyRole,twitter,facebook,linkedIn, instagram}) => {

    return (
        <>
            {about && <>
                <h5 className={classes.CardTitle}>About</h5>
                <p className="small fst-italic">{about}</p>
            </>
            }

            <h5 className={classes.CardTitle}>Profile Details</h5>
            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Full Name</div>
                <div className="col-lg-9 col-md-8">{name}</div>
            </div>

            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Username</div>
                <div className="col-lg-9 col-md-8">{username}</div>
            </div>
            {
                companyRole && <div className={`row ${classes.Row} mb-3`}>
                    <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Company Role</div>
                    <div className="col-lg-9 col-md-8">{companyRole}</div>
                </div>
            }
            {address && <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Address</div>
                <div className="col-lg-9 col-md-8">{address}
                </div>
            </div>}
            {facebook && <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Facebook link</div>
                <div className="col-lg-9 col-md-8">
                    <Link href={facebook}>
                        <a>{facebook}</a>
                    </Link>
                </div>
            </div>}
            {twitter && <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Twitter link</div>
                <div className="col-lg-9 col-md-8">
                       <Link href={twitter}>
                        <a> {twitter}</a>
                    </Link>
                </div>
            </div>}
            {instagram && <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Instagram</div>
                <div className="col-lg-9 col-md-8">
                     <Link href={instagram}>
                        <a> {instagram}</a>
                    </Link>
                </div>
            </div>}

            {linkedIn && <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>linkedIn link</div>
                <div className="col-lg-9 col-md-8">
                     <Link href={linkedIn}>
                        <a>{linkedIn}</a>
                    </Link>
                </div>
            </div>}
        </>
    );
};

export default Overview;