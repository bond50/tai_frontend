import React from 'react';
import Link from "next/link";
import classes from '../../styles/cta.module.css'

const Cta = () => {
    return (
        <section className={classes.cta} >
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-9  text-lg-left">
                        <h3>Let Tai Lifestyle help you Build a more  Successful Business</h3>
                        At Tai Lifestyle, we understand that even large-scale construction is a mixture of smaller
                        projects, which is a feature of multitasking in its own right.
                    </div>
                    <div className={`col-lg-3 ${classes.BtnContainer} container text-center`}>
                        <Link href={'/contact'}>
                            <a className={`${classes.Btn} align-middle`} >Request for a quote</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;