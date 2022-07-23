import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";

const Concern = () => {
    return (
        <section className='features '>
            <div className="container">
                <div className="row justify-content-around align-items-center gy-4" data-aos="fade-up">
                    <div className="col-md-5  ">
                        <Image
                            width={1920}
                            height={1256}
                            src="/asbestos.png"
                            className="img-fluid" alt="asbestos"/>
                    </div>
                    <div className="col-md-7  ">
                        <h3>Is the use of Asbestos a health concern? </h3>
                        <p>We are in agreement that presence of Asbestos in the air poses a great risk as well as the
                            environment overtime. For this reason, there is an urgent need to dispose of Asbestos safely
                            and clean our facilities so as to minimize further environmental risks that result from
                            Asbestos exposure. So, it is recommended to use professional services of Asbestos handlers
                            like Tai Lifestyle Limited. </p>
                        <p>
                            Thankfully, our company is fully licensed and has obtained an operating license from NEMA to
                            dispose of Asbestos. This is in accordance with section 23 of the General Provisions of the
                            Waste Management Regulation that prohibits anyone from engaging in hazardous activities
                            especially those without valid licenses like the Environmental and Social Impact Assessment
                            License.
                        </p>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Concern;
