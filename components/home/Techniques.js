import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";
import classes from "../../styles/features.module.css";

const Techniques = () => {
    return (
        <section className={`${classes.Features}`}>
            <div className="container">
                <div className="row justify-content-around align-items-center gy-4" data-aos="fade-up">
                    <div className="col-md-5 order-1 order-md-2 " data-aos="fade-left" data-aos-delay="100">
                        <Image
                            src='/sludge.jpg'
                            className="img-fluid"
                            alt="ai’s safe sludge disposal techniques" width={640} height={398}/>
                    </div>
                    <div className="col-md-7 order-2 order-md-1 ">
                        <h3>Tai’s safe <span> sludge disposal</span> techniques</h3>
                        <p>
                            In the petroleum and oil industry, the generation of hazardous sludge oil is a common
                            occurrence and this is why Tai lifestyle has come to your rescue.
                        </p>
                        <p>
                            We are registered, certified and licensed to manage, treat and remove used oil to a
                            specified disposal site that is in line with the mandatory requirements and EHS guidelines
                            set by NEMA.
                        </p>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Techniques;
