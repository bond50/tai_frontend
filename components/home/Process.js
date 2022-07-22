import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";

const Process = () => {
    return (
        <section className='features section-bg'>
            <div className="container">
                <div className="row justify-content-around align-items-center gy-4" data-aos="fade-up">
                    <div className="col-md-5  ">
                        <Image src='/oil.jpg' className="img-fluid"
                               alt="ai’s safe sludge disposal techniques" width={640} height={426}/>
                    </div>
                    <div className="col-md-7  ">
                        <h3>Tai’s Processes</h3>
                        <p>Oil and water separation process is done at our separation site after collecting the oil, and
                            then it is dispose off to companies with boiler burners where the treated is thereafter used
                            for cleaning and watering plants. Also, we offer oil-free air boiler solutions suitable for
                            every water waste treatment application for municipal as well as industrial.
                        </p>
                        <p>
                            At Tai Lifestyle, we provide low pressure and blower technologies created and produce by our
                            in-house engineers which are ideal for waste water treatment. Our technologies have lower
                            noise and vibration levels; so our products are specially tailored to suit the needs of our
                            clientele.
                        </p>
                        <p>
                            In addition to that, we have licensed tankers for transporting huge volumes of consignments.
                        </p>


                    </div>
                </div>
            </div>

        </section>
    );
};

export default Process;
