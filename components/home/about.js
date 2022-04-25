import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";

const About = () => {

    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>about</h2>
                    <h3>Who  <span>we are</span></h3>
                    <p>Tai Lifestyle is well established and time tested company with plenty of experience in
                        construction and heavy civil engineering works.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <Image src='/hero/image2.jpg' className="img-fluid" alt="" width={1600} height={1200}/>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                         data-aos="fade-up" data-aos-delay="100">
                        <h3>Summery about Tai Limited</h3>
                        <p className="fst-italic">
                            The following is a brief history about Tai company
                        </p>
                        <ul>
                            <li>
                                <i className="bx bx-trash"/>
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
                            </li>
                            <li>
                                <i className="bx bx-box"/>
                                <div>
                                    <h5>Licensed Treatment plant/disposal site</h5>
                                    <p>
                                        In this regard, we owned a NEMA fully Licensed Treatment plant/disposal site
                                        located in Mikindani, off Mombasa –Mariakani Road, coupled with License to
                                        transport the
                                        aforesaid waste.
                                    </p>
                                </div>
                            </li>
                            {/*<li>*/}
                            {/*    <i className="bx bx-extension"/>*/}
                            {/*    <div>*/}
                            {/*        <h5> Scope Expansion</h5>*/}
                            {/*        <p>*/}
                            {/*            Over the years, the need for diversity and growth has necessitated expansion of*/}
                            {/*            our scope to include handling, transportation and disposal of asbestos.*/}
                            {/*            Therefore, we own another disposal site, whose Environmental Impact Assessment*/}
                            {/*            (EIA) has been done and respective Disposal License issued accordingly. This*/}
                            {/*            site is located in Maungu, about 30 kilometers from Voi town.*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                        <div className="text-center">
                            <Link href={`/about/history`}>
                                <a className="btn-learn-more">Find out more about us</a>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;