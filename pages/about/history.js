import React from 'react';
import History from "../../components/about/history";
import {useRouter} from "next/router";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";


const Hist = () => {
    const router = useRouter()

    const head = () => (
        <Head>
            <title>History | {APP_NAME}</title>
            <meta
                name="description"
                content={`${APP_NAME}  is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya`}
            />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`History | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`${APP_NAME}  is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya`}/>

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
            <History/>
        </>

    );
};

export default Hist;