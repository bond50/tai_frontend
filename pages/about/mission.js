import React from 'react';
import Mission from "../../components/about/mission";
import {useRouter} from "next/router";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";

const Miss = () => {
    const router = useRouter()

    const head = () => (
        <Head>
            <title>Mission | {APP_NAME}</title>
            <meta
                name="description"
                content={`To be one of the Africa’s leading suppliers in institutions and organizations`}
            />

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