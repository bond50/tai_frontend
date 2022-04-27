import React from 'react';
import Breadcrumbs from "./reusables/Breadcrumbs";

const SimpleHero = ({title}) => {
    return (
        <section id='simple-hero' className='d-flex justify-content-center align-items-center '>
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9 text-center d-flex align-items-center  flex-column ">
                        <h2 className='animate__animated animate__zoomIn'>{title}</h2>
                         <Breadcrumbs/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SimpleHero;