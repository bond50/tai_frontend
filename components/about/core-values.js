import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Image from "next/image";
import useSWR from "swr";
import {fetcher} from "../axios/axios";


const CoreValues = () => {
    const {data: values, error: valueErr} = useSWR({url: `/core-values`, method: 'get'}, fetcher);
    if (!values) return <div id='preloader'/>
    if (valueErr) return <div>failed to load</div>

    return <section id="values" className="values ">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Core Values</h2>
                <h3>Our <span>Core Values</span></h3>
            </div>
            <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                    <div className="content">
                        <h3>Tai Lifestyle Limited Core values</h3>
                        <p>
                            The core values are the basic elements of how we go about our work. They are the practices
                            we use (or should be using) every day in everything we do. CORE VALUES: Govern personal
                            relationships. Guide business processes.
                        </p>
                    </div>
                    <div className="accordion-list">
                        {values && values.map((item, i) => {
                            return (
                                <Accordion defaultActiveKey='0' key={item._id}>
                                    <Accordion.Item eventKey={i.toString()}>
                                        <Accordion.Header>
                                            <span>{`0${i + 1}`}</span>{item.title.toLowerCase()}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {item.content}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            );
                        })}
                    </div>
                </div>
                <div className="col-lg-5 align-items-stretch "
                     data-aos="zoom-in" data-aos-delay="100">
                    <Image src={`/hero/14.jpg`} className='img-fluid' alt='kk' width={1430} height={1670}/>
                </div>
            </div>
        </div>

    </section>;
};

export default CoreValues;