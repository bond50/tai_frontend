import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";

const History = () => {
    return (

        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>History</h2>
                    <h3>Brief history about <span>Tai Limited</span></h3>
                </div>

                <div className="row">
                    <div className="col-lg-6  content d-flex flex-column justify-content-center"
                         data-aos="fade-up" data-aos-delay="100">
                        <p>
                            Tai Lifestyle Limited is a private liability company, registered and incorporated under
                            the
                            company act, 2015 cap 486 of the laws of Kenya. The company location is in Mombasa city
                            and
                            its
                            physical office address is off Nkrumah Road, Third Floor, Taiyebi House, opposite NSSF
                            Building,
                            Mombasa, whilst its postal address is P.O Box 89990-80100 Mombasa.
                        </p>

                        <p>
                            Tai Lifestyle was primarily formed to carryout Safe Management of hazardous waste
                            emanating from
                            oil
                            and oil Products hence, collect, transport and dispose waste oil and sludge according
                            the NEMA
                            regulations and guidelines. Waste generation occurs from all these numerous human
                            activities,
                            which
                            creates the need for proper management to protect both the environment and our health.

                        </p>
                        <p>
                            In this regard, we owned a NEMA fully Licensed Treatment plant/disposal site located in
                            Mikindani,
                            off Mombasa –Mariakani Road, coupled with License to transport the aforesaid waste.
                        </p>

                        <p>
                            Over the years, the need for diversity and growth has necessitated expansion of our
                            scope to
                            include
                            handling, transportation and disposal of asbestos. Therefore, we own another disposal
                            site,
                            whose
                            Environmental Impact Assessment (EIA) has been done and respective Disposal License
                            issued
                            accordingly. This site is located in Maungu, about 30 kilometers from Voi town.
                        </p>

                        <p>
                            Asbestos disposal basically involves removal of old hazardous roofing sheets, wrapping
                            them with
                            recommended polythene bags and tapes, transportation and subsequent disposal at NEMA
                            authorized
                            site
                        </p>

                        <p>
                            Since in every building where old sheets are removed will require re-roofing for
                            replacement,
                            this
                            has in turn made us venture into building and construction so that
                            we can offer a complete package to our clientele.
                        </p>

                        <p>
                            In the above foregoing, we are registered with National Construction Authority Category
                            for (4)
                            for
                            Building, road works and water work contractor.
                        </p>

                        <p>
                            Our commitment to offer professional services and products tailored to serve the
                            interest of our
                            clientele cannot be over-emphasized. We look forward to opportunities that will give us
                            a room
                            to
                            provide our acquired expertise and experience gained over the years of our operation.
                        </p>


                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 " data-aos="fade-right" data-aos-delay="100">
                        <Image src={`/hero/11.jpg`} className="img-fluid" alt="sludge collection " width={1430} height={1750}/>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default History;