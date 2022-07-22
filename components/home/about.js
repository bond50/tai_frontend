import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";

const About = () => {

    return (
        <section  className="alt-services section-bg">
            <div className="container" data-aos="fade-up">
                {/*<div className="section-title">*/}
                {/*    <h2>about</h2>*/}
                {/*    <h3>Who  <span>we are</span></h3>*/}
                {/*    <p>Tai Lifestyle is well established and time tested company with plenty of experience in*/}
                {/*        construction and heavy civil engineering works.*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="row justify-content-around gy-4">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <Image src='/hero/image2.jpg' className="img-fluid" alt="Safe Management of hazardous waste emanating" width={1600} height={1200}/>
                    </div>
                     <div className="col-lg-5 d-flex flex-column justify-content-center">
                        {/*<h3>Summery about Tai Limited</h3>*/}
                        {/*<p className="fst-italic">*/}
                        {/*    The following is a brief history about Tai company*/}
                        {/*</p>*/}

                          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
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
                         <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
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
                         <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
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