import React from 'react';
import {APP_NAME, DOMAIN} from "../config";
import Head from "next/head";
import {useRouter} from "next/router";
import About from "../components/home/about";
import Layout from "../components/layout";
import useSWR from "swr";
import {fetcher} from "../components/axios/axios";
import Featured from "../components/home/featured";
import Cta from "../components/home/cta";
import CoreValues from "../components/about/core-values";


const Index = () => {
    const router = useRouter()

    const head = () => (
        <Head>
            <title>The {APP_NAME} </title>
            <meta
                name="description"
                content={`${APP_NAME} is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya. `}
            />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
            <meta name="robots" content="max-image-preview:large"/>
            <meta property="og:locale" content="en_US"/>

            <meta property="og:title" content={`${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`Tai Lifestyle Limited is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya. `}
            />

            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>

            <meta
                property="og:image"
                content={`/herp.jpg`}
            />
            <meta
                property="og:image:secure_url"
                content={`/image1.jpg`}
            />
            <meta property="og:image:type" content="image/png"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    const {data, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    const {data: values, error: valueErr} = useSWR({url: `/core-values`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    if (valueErr) return <div>failed to load</div>
    if (!data) return <div>loading...</div>


    return (
        <>
            {head()}
            <Layout>
                <Featured data={data}/>
                <Cta/>
                <About/>

                <CoreValues values={values}/>
            </Layout>
        </>
    );
};

export default Index;