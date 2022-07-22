import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";

const Commitment = () => {
    return (
        <section className='features '>
            <div className="container">
                <div className="row justify-content-around align-items-center gy-4" data-aos="fade-up">
                    <div className="col-md-5 order-1 order-md-2 ">
                       <Image src='/commit.jpg' className="img-fluid"
                               alt="ai’s safe sludge disposal techniques" width={1600} height={721}/>
                    </div>
                    <div className="col-md-7 order-2 order-md-1 ">
                        <h3>Tai’s commitment to a sustainable future </h3>
                        <p>
                            Generally, Asbestos disposal entails the removal of old hazardous roofing sheets; and then
                            wrapping them with the recommended polythene tapes and bags in readiness for transportation
                            and the eventual disposal at a NEMA designated site.
                        </p>
                        <p>
                            Since its obvious that whenever old iron sheets are removed, new ones replace them and this
                            has in turn prompted us venture into building and construction so that we can offer a
                            complete sustainable package to our clientele.
                        </p>
                        <p>In the aforementioned foregoing, we are registered with the National Construction Authority
                            in Category (4) for Road works, Building and Water Works Contractor. </p>
                        <p>
                            With that in mind, Tai Lifestyle is fully committed in making sure that renewable energy is
                            utilized and affordable to everyone in Kenya. We believe that by making green energy the
                            most affordable, and accessible; we can significantly cut greenhouse emissions in Kenya and
                            globally too.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Commitment;
