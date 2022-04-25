import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import dynamic from 'next/dynamic'

const CoreValues = dynamic(() => import('../../components/about/core-values'))


const Values = () => {

    const router = useRouter()

    const head = () => (
        <Head>
            <title>Core values | {APP_NAME}</title>
            <meta
                name="description"
                content={`${APP_NAME} core values include safety,integrity, teamwork,transparency,teamwork,leadership and professionalism`}
            />
            <meta name="keywords"
                  content="Tai, Tai lifestyle ,Tai lifestyle Limited,tailifestyle.com,core-values, safety,integrity, teamwork,transparency,teamwork,leadership , professionalism"/>

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Core values | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`${APP_NAME} core values include safety,integrity, teamwork,transparency,teamwork,leadership and professionalism`}
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
            <CoreValues/>
        </>

    )
}


export default Values;