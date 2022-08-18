import React from 'react';
import Image from "../reusables/lazy/Image";
import classes from '../../styles/AltServices1.module.css'

const About = () => {

    return (
        <section className={classes.AltServices}>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h3>Summery<span> about Tai</span> Limited</h3>
                </div>
                <div className="row justify-content-around align-items-center gy-4 ">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <Image
                            src='/hero/image2.jpg'
                            className="img-fluid"
                            alt="Safe Management of hazardous waste emanating"
                            width={1600}
                            height={1200}/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className={`${classes.IconBox} d-flex position-relative`} data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-trash flex-shrink-0"/>
                            <div>
                                <h4>Safe Management of hazardous waste emanating
                                    from oil and oil Products </h4>
                                <p>Tai Lifestyle was primarily formed to carryout Safe Management of hazardous waste
                                    emanating from oil and oil Products hence, collect, transport and dispose waste
                                    oil and sludge
                                    according the NEMA regulations and guidelines. Waste generation occurs from all
                                    these numerous
                                    human activities, which creates the need for proper management to protect both
                                    the environment and our health.</p>
                            </div>
                        </div>
                        <div className={`${classes.IconBox} d-flex position-relative`} data-aos="fade-up" data-aos-delay="200">
                            <i className="bx bx-box flex-shrink-0"/>
                            <div>
                                <h4>Licensed Treatment plant/disposal site</h4>
                                <p>
                                    In this regard, we owned a NEMA fully Licensed Treatment plant/disposal site
                                    located in Mikindani, off Mombasa –Mariakani Road, coupled with License to
                                    transport the
                                    aforesaid waste.
                                </p>
                            </div>
                        </div>
                        <div className={`${classes.IconBox} d-flex position-relative`} data-aos="fade-up" data-aos-delay="300">
                            <i className="bx bx-extension flex-shrink-0"/>
                            <div>
                                <h4>Scope Expansion</h4>
                                <p>
                                    Over the years, the need for diversity and growth has necessitated expansion of
                                    our scope to include handling, transportation and disposal of asbestos.
                                    Therefore, we own another disposal site, whose Environmental Impact Assessment
                                    (EIA) has been done and respective Disposal License issued accordingly. This
                                    site is located in Maungu, about 30 kilometers from Voi town.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;