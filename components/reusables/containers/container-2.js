import React from 'react';
import Image from "next/image";

const Container2 = ({id, className, single, title, title2, children, imgPackage, alt, width, height}) => {
    return (
        <section id={id} className={`alt-services ${className}`}>
            <div className="container" data-aos="fade-up">
                {!single && <div className="section-header">
                    <h2>{title}</h2>
                    {title2 && <h3>{title2}</h3>}
                </div>}
                <div className="row justify-content-around gy-4">
                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        {children}
                    </div>
                    <div className="col-lg-6 img-bg" data-aos="zoom-in" data-aos-delay="100">
                        <Image
                            src={imgPackage}
                            width={width}
                            height={height}
                            alt={alt}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Container2;