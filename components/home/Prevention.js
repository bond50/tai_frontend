import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";

const Concern = () => {
    return (
        <section className='features section-bg'>
            <div className="container">
                <div className="row justify-content-around align-items-center gy-4" data-aos="fade-up">
                    <div className="col-md-5  ">
                        <Image src='/pevent.jpg' className="img-fluid"
                               alt="Prevention of Asbestos Exposure and Effects" width={640} height={427}/>

                    </div>
                    <div className="col-md-7  ">
                        <h3>Prevention of Asbestos Exposure and Effects</h3>
                        <p>Truth is, Asbestos fibers can easily be inhaled, get trapped in the lungs and eventually
                            leading to fibrotic lung cancer or Asbestosis. Additionally, asbestos exposure increases the
                            risk of Mesothelioma, and heart complications where the heart is enlarged as a result of
                            increased blood flow resistance through the lungs. </p>
                        <p>
                            However, Tai Lifestyle is aware of such human effects linked to long-term asbestos exposure
                            so we ensure that our workers are not exposed to highly concentrated asbestos frequently and
                            for longer periods of time. Thus; we protect our workers and the community around from
                            asbestos inhalation which can lead to severe pleural, laryngeal effects as well as immune
                            system issues.
                        </p>

                        <h4> Our Asbestos Services Include:</h4>
                        <ul>
                            <li>Asbestos monitoring</li>
                            <li>Asbestos surveys</li>
                            <li>Asbestos management and disposal</li>
                            <li>Asbestos training</li>
                        </ul>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Concern;
