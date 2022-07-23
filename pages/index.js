import React from 'react';
import {APP_NAME, DOMAIN} from "../config";
import Head from "next/head";
import {useRouter} from "next/router";
import About from "../components/home/about";
import Cta from "../components/home/cta";
import Layout from '../components/layout'
import Featured from "../components/home/featured";
import RecentBlogs from "../components/home/recent-blogs";
import About1 from "../components/home/about1";
import Commitment from "../components/home/commitment";
import Concern from "../components/home/concern";
import Team from "../components/home/team";
import Types from "../components/home/types";
import Prevention from "../components/home/Prevention";
import Techniques from "../components/home/Techniques";
import Process from "../components/home/Process";
import Sustainable from "../components/home/sustainable";


const Index = () => {
    const router = useRouter()
    const head = () => (
        <Head>
            <title>{APP_NAME} </title>
            <meta
                name="description"
                content={`${APP_NAME} is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya.`}
            />
            <meta name="keywords"
                  content="Tai, Tai lifestyle ,Tai lifestyle Limited, tailifestyle.com ,asbestos, asbestos handling construction, "/>

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
                <About1/>

                <Commitment/>
                <Cta/>
                <Concern/>
                <Team/>
                <About/>
                <Types/>
                <Featured/>
                <Prevention/>
                <Techniques/>
                <Process/>
                <RecentBlogs/>
                <Sustainable/>
            </Layout>
        </>
    );
};

export default Index;