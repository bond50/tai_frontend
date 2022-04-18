import React from 'react';
import Link from "next/link";

const Cta = () => {
    return (
        <section id="cta" className="cta" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9  text-lg-left">
                        <h3>Let Tai Lifestyle help you Build a more <span> Successful Business</span></h3>
                        At Tai Lifestyle, we understand that even large-scale construction is a mixture of smaller
                        projects, which is a feature of multitasking in its own right.
                    </div>
                    <div className="col-lg-3 cta-btn-container text-center">
                        <Link href={'/contact'}>
                            <a className="cta-btn align-middle" >Request for our service</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;