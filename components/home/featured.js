import React from 'react';
import renderHTML from "react-render-html";
import {trim} from "../reusables/functions/trim";
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";

const Featured = () => {
    const {data, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div id='preloader'/>

    return (
        <section id="icon-boxes" className="icon-boxes " data-aos="fade-up">
            <div className="container">
                <div className="row">
                    {data.map(d => {
                        return <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                                    data-aos="fade-up" key={d._id}>
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-building-house"/></div>
                                <h3 className="title">
                                    <Link href={`/tai/${d.slug}`}>
                                         <a>{d.title}</a>
                                    </Link>
                                </h3>
                                {renderHTML(trim(d.excerpt,100))}
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    );
};

export default Featured;