

import React from 'react';
import ServiceCard from "../card/service-card";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import renderHTML from "html-react-parser";
import {API} from "../../config";


const Services = ({className}) => {
    const {data, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div  id='preloader'/>


    return (
        <section  className={className}>
            <div className="container" data-aos="fade-up">
                 <div className="section-title">
                    <h3>Featured <span>Services</span></h3>
                </div>

                <div className="row gy-4">
                    {data && data.map((service, i) => (
                        <ServiceCard
                            title={service.title}
                            delay={`${i + 100}`}
                            href={`/tai/${service.slug}`}
                            imgSrc={`${API}/service/photo/${service.slug}`}
                            imgAlt={service.title}
                            key={service._id}
                        >
                            {renderHTML(service.excerpt)}
                        </ServiceCard>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Services;