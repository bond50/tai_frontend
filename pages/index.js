import React from 'react';
import {APP_NAME, DOMAIN} from "../config";
import Head from "next/head";
import {useRouter} from "next/router";
import About from "../components/home/about";
import Layout from "../components/layout";
import Featured from "../components/home/featured";
import Cta from "../components/home/cta";
import CoreValues from "../components/about/core-values";




const Index = () => {
    const router = useRouter()

    const head = () => (
        <Head>
            <title>{APP_NAME} </title>
            <meta
                name="description"
                content={`${APP_NAME} is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya.`}
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
                content={`/late.jpg`}
            />
            <meta
                property="og:image:secure_url"
                content={`/late.jpg`}
            />
            <meta property="og:image:type" content="image/png"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    return (
        <>
            {head()}
            <Layout>
                <Featured/>
                <Cta/>
                <About/>
                <CoreValues/>
            </Layout>
        </>
    );
};

export default Index;