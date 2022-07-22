import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import Vision from "../../components/about/vision";
import Layout from "../../components/layout";

const Vis = () => {

    const router = useRouter()

    const head = () => (
        <Head>
            <title>Vision | {APP_NAME}</title>
            <meta
                name="description"
                content={`Be, and be recognized as, the best services company in the world`}
            />

            <meta name="keywords"
                  content="Tai, Tai lifestyle ,Tai lifestyle Limited,tailifestyle.com, vision , vision statement"/>

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Vision | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`Be, and be recognized as, the best services company in the world`}
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
            <Layout simple title='Vision'>
                <Vision/>
            </Layout></>
    );
};

export default Vis;