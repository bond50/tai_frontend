import React from 'react';
import classes from '../../styles/AltServices1.module.css'

const Sustainable = () => {
    return (
        <section className={`${classes.AltServices} section-bg`}>
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-around">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h3 className={classes.Header}>Partner up with Tai in sustainable construction</h3>
                        <p>Tai Lifestyle understands that even large-scale construction is a concoction of smaller
                            projects and that why we acknowledge the importance of effective planning. In this regard,
                            we are actively involved in the environmental impact of a project; it’s funding, scheduling,
                            safety risks, the availability and the transportation of sustainable construction materials.
                            We are also concerned with the project’s compliance with the local and national
                            standards.</p>
                        <p>
                            Thanks to our vast knowledge and longtime experience in construction, we have a wide range
                            of services that enable us to provide sustainable solutions based on our clients’ budget,
                            time schedule and that meets their needs. At Tai Lifestyle, we can conduct construction
                            feasibility, assessment risk and management studies right from the start of your project.
                        </p>
                        <p>
                            Furthermore, we are renowned specialists in the construction sector, having worked on civil
                            works, housing schemes, factories, hospital, banks, office blocks, student centers including
                            universities. Tai Lifestyle has also trained its workers safe, healthy and eco-friendly
                            handling and removal of hazardous waste.
                        </p>
                        <p>
                            Besides creating enduring value through the art of green building, we design, budget and
                            build amazing houses.
                        </p>
                        <p>In conclusion, Tai Lifestyle is well-established and time-tested company that has plenty of
                            experience in heavy civil engineering works, construction, waste management as well as
                            electrical engineering. Therefore, do not hesitate to contact Tai Lifestyle for
                            aforementioned products and services. </p>
                    </div>
                    <div className= {`col-lg-5 ${classes.ImgBg}`}
                         style={{backgroundImage: `url(/con1.jpeg)`}}
                         data-aos="zoom-in" data-aos-delay="100"/>
                </div>

            </div>
        </section>
    );
};

export default Sustainable;