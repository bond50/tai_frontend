import React from 'react';
import Image from "next/image";

const Container1 = ({id, title, imgPackage, className, alt, height, single, header3, width, header4, children}) => {
    return (
        <section
            id={id}
            className={`container1  ${className}`}>
            <div className="container" data-aos="fade-up">
                {!single && <div className="section-header">
                    <h2>{title}</h2>
                </div>
                }
                <div className="row g-0  " data-aos="fade-up" data-aos-delay="200">
                    <div className="col-xl-5 img-bg">
                        <Image
                            src={imgPackage}
                            width={width}
                            height={height}
                            alt={alt}
                        />
                    </div>
                    <div className="col-lg-7 content  position-relative">
                        <div className="info">
                            {header3 && <h3 className="mb-3">{header3} </h3>}
                            {header4 && <h4 className="mb-3"> {header4}</h4>}
                            {children}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Container1;