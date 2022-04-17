import React from 'react';
import useSWR from "swr";
import {fetcher} from "../axios/axios";

const Services = () => {
    const {data, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Services;