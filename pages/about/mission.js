import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import dynamic from 'next/dynamic'

const Mission = dynamic(() => import('../../components/about/mission'))

const Miss = () => {
    const router = useRouter()

    const head = () => (
        <Head>
            <title>Mission | {APP_NAME}</title>
            <meta
                name="description"
                content={`To be one of the Africa’s leading suppliers in institutions and organizations`}
            />
            <meta name="keywords"
                  content="Tai, Tai lifestyle ,Tai lifestyle Limited,tailifestyle.com,  mission"/>
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Mission | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`To be one of the Africa’s leading suppliers in institutions and organizations`}
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
                content={`/herp.jpg`}
            />
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );


    return (
        <>
            {head()}
            <Mission/>
        </>
    );
};

export default Miss;