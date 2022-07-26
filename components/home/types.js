import React from 'react';
import classes from '../../styles/AltServices1.module.css'

const Types = () => {
    return (
        <section className={`${classes.AltServices} section-bg `}>
            <div className="container" data-aos="fade-up">

                <div className="row justify-content-around gy-4">
                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <h3 className={classes.Header}>The types of <span>Asbestos handled</span> </h3>
                        <p>
                            At Tai, our workers are trained and competent to handle the six types of asbestos which are
                            legally recognized by the Asbestos Hazard Emergency Response Act of 1986. However, these
                            asbestos fall into two main categories namely:-
                        </p>
                        <div className={`${classes.IconBox} d-flex position-relative`} data-aos="fade-up" data-aos-delay="100">
                            <i className="bi bi-easel flex-shrink-0"/>
                            <div>
                                <h4><a href="" className="stretched-link">Amphibole Asbestos</a></h4>
                                <p>We are highly experienced in disposing of asbestos fibers that have a jugged,
                                    straight shape like Tremolite, Actinolite, Amosite and Crocidolite. </p>
                            </div>
                        </div>


                        <div className={`${classes.IconBox} d-flex position-relative`} data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-brightness-high flex-shrink-0"/>
                            <div>
                                <h4><a href="" className="stretched-link">Serpentine Asbestos</a></h4>
                                <p>Also, our company is well-reputed in its professional competence in handling curly
                                    asbestos fibers such as Chrysotile or popularly known as white asbestos.</p>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-5 img-bg"
                         style={{backgroundImage: `url(/asbestos.jpg)`}}
                         data-aos="zoom-in" data-aos-delay="100"/>
                </div>

            </div>
        </section>
    );
};

export default Types;