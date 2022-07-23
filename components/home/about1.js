//
// import React from 'react';
//
// const About1 = () => {
//     return (
//         <section  className="alt-services section-bg">
//             <div className="container" data-aos="fade-up">
//
//                 <div className="row justify-content-around gy-4">
//                     <div className="col-lg-4 img-bg"
//                          style={{backgroundImage: `url(/late.jpg)`}}
//                          data-aos="zoom-in" data-aos-delay="100"/>
//
//                     <div className="col-lg-7 d-flex flex-column justify-content-center">
//                         <h3>Welcome to Tai lifestyle LTD</h3>
//
//                         <p>Tai Lifestyle Limited is a private liability company which is registered under the company
//                             act of 2015,
//                             cap 486 of the Kenyan laws. We offer executive services and clean products specifically
//                             tailored to suit
//                             our client’s needs. We are mainly focused in creating sustainable opportunities and
//                             solutions that will
//                             allow us to apply our newly acquired expertise and experience gained over our era in
//                             service.
//                         </p>
//                         <p>
//                             Tai Lifestyle Limited is located in Mombasa City, Nkrumah Road, Third Floor, Taiyebi House
//                             opposite NSSF
//                             Building, Mombasa. The company’s postal address is P.O. Box 89990-80100 Mombasa.
//                         </p>
//                         <p>
//                             Tai’s primary focus is to safety in the management of hazardous waste generated from oil and
//                             oil
//                             products. Therefore, we are specialists in the collection, transportation and disposal of
//                             waste oil and
//                             sludge in accordance with the NEMA guidelines and regulations. Since waste generation
//                             emanates from
//                             various human activities resulting to waste; that’s where Tai comes in.
//                         </p>
//                         <p>In regard to safe and proper management of waste to protect human health and the environment,
//                             we at Tai
//                             Lifestyle Limited are the right people because we have trained professionals suitable for
//                             such tasks.
//                             Moreover, we own a NEMA fully licensed treatment plant situated at Mikindani, off
//                             Mombasa-Mariakani
//                             Road; together with license to transport the aforementioned waste.</p>
//                         <p>Over the recent years, the need for growth and diversity has escalated the expansion of our
//                             scope to
//                             include; handling, transportation and removal of asbestos. To top it off, we own another
//                             disposal site
//                             located in Maungu town which is about 30 kilometers from Voi town. The Maungu disposal site
//                             is fully
//                             operational where the Environmental Impact Assessment has been done and respective disposal
//                             license
//                             issued.
//                         </p>
//
//                     </div>
//                 </div>
//
//             </div>
//         </section>
//     );
// };
//
// export default About1;


import React from 'react';
import {APP_NAME} from "../../config";

const About1 = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="row position-relative">

                    <div className="col-lg-5 about-img" style={{backgroundImage: `url(/late.jpg)`}}/>

                    <div className="col-lg-10">
                        <h2>Tai Lifestyle LTD</h2>
                        <div className="our-story">
                            <h4>Welcome</h4>
                            <h3>Our History</h3>
                            <p>Tai Lifestyle Limited is a private liability company which is registered under the
                                company
                                act of 2015,
                                cap 486 of the Kenyan laws. We offer executive services and clean products specifically
                                tailored to suit
                                our client’s needs. We are mainly focused in creating sustainable opportunities and
                                solutions that will
                                allow us to apply our newly acquired expertise and experience gained over our era in
                                service.
                            </p>
                            <p>
                             Tai Lifestyle Limited is located in Mombasa City, Nkrumah Road, Third Floor, Taiyebi House
                             opposite NSSF
                             Building, Mombasa. The company’s postal address is P.O. Box 89990-80100 Mombasa.
                         </p>
                         <p>
                             Tai’s primary focus is to safety in the management of hazardous waste generated from oil and
                             oil
                             products. Therefore, we are specialists in the collection, transportation and disposal of
                             waste oil and
                             sludge in accordance with the NEMA guidelines and regulations. Since waste generation
                             emanates from
                             various human activities resulting to waste; that’s where Tai comes in.
                         </p>
                        <p>In regard to safe and proper management of waste to protect human health and the environment,
                            we at Tai
                            Lifestyle Limited are the right people because we have trained professionals suitable for
                            such tasks.
                            Moreover, we own a NEMA fully licensed treatment plant situated at Mikindani, off
                            Mombasa-Mariakani
                            Road; together with license to transport the aforementioned waste.</p>
                        <p>Over the recent years, the need for growth and diversity has escalated the expansion of our
                            scope to
                            include; handling, transportation and removal of asbestos. To top it off, we own another
                            disposal site
                            located in Maungu town which is about 30 kilometers from Voi town. The Maungu disposal site
                            is fully
                            operational where the Environmental Impact Assessment has been done and respective disposal
                            license
                            issued.
                        </p>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About1;