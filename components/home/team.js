import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";

const Team = () => {
    return (
        <section className='features'>
            <div className="container">
                <div className="row justify-content-around align-items-center gy-4" data-aos="fade-up">
                    <div className="col-md-5 order-1 order-md-2 ">
                          <Image
                            width={1600}
                            height={720}
                            src="/late.jpg"
                            className="img-fluid" alt="asbestos"/>
                    </div>
                    <div className="col-md-7 order-2 order-md-1 ">
                        <h3>Tai’s Asbestos Handling Team </h3>
                        <p>After coming into contact with Asbestos waste directly, our handling team usually takes clean
                            water showers to wash off any asbestos fiber remnants from their personal protective
                            equipment (PPE) every day. Due to this, we utilize a fully-operational trailer or
                            decontamination unit to remove any asbestos remains from our worker’s personal protective
                            clothing or the decontamination suits.
                        </p>
                        <p>
                            Moreover, it is normal customs for us to place a three-line decontamination unit about 30
                            meters from the working site that includes a fully- functioning cold and hot water system.
                            Also, the water system can be adjusted at the shower tap including a well-functioning water
                            filtration unit which is used for filtering water waste down to five microns then it is
                            disposed of.
                        </p>
                        <p>
                            Lastly, we ensure that our workers wear clean outer protective suits after decontaminating
                            themselves.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Team;
