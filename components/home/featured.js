import React from 'react';
import renderHTML from "html-react-parser";
import {trim} from "../reusables/functions/trim";
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import classes from '../../styles/recentservices.module.css'
import {API} from "../../config";
import Image from "../reusables/lazy/Image";

const Featured = () => {
    const {data, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div id='preloader'/>


    return (
        <section>
            <div className={`container-fluid ${classes.services} `}>
                <div className="row g-0 ">
                    {data.map(d => {
                        return <div className={`col-md-6 col-lg-3  `} key={d._id} >
                            <div className={classes.serviceItem}>
                                <div className={classes.icon}>
                                    <i className={d.icon}/>
                                </div>
                                <div className={` ${classes.details} `}>
                                    <Link href={`/tai/${d.slug}`}>
                                        <a><h3>{d.title}</h3></a>
                                    </Link>
                                    {renderHTML(trim(d.excerpt, 200))}
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    );
};

export default Featured;