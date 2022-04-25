import Link from "next/link";
import Head from "next/head";
import {APP_NAME, DOMAIN,} from "../../config";
import React from "react";
import {useRouter} from "next/router";


import dynamic from 'next/dynamic'

const Layout  = dynamic(() => import('../../components/layout'))

const Index = () => {
    const router = useRouter()

    const head = () => (
        <Head>
            <title>About  | {APP_NAME}</title>
            <meta
                name="description"
                content={`Tai Lifestyle Limited is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya`}
            />
             <meta name="keywords"
                  content="Tai, Tai lifestyle ,Tai lifestyle Limited,tailifestyle.com, core-values,history, vision, mission"/>


            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`About | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`Tai Lifestyle Limited is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya`}
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
            <Layout simple title='About'>
                <section>
                    <div className="container page-intro">
                        <h4>Links</h4>
                        <ul>
                            <li>
                                <i className="bi bi-chevron-double-right"/>
                                <Link href={`/about/history`}>
                                    <a>History</a>
                                </Link>
                            </li>
                            <li>
                                <i className="bi bi-chevron-double-right"/>
                                <Link href={`/about/mission`}>
                                    <a>Our mission statement</a>
                                </Link>
                            </li>
                            <li>
                                <i className="bi bi-chevron-double-right"/>
                                <Link href={`/about/vision`}>
                                    <a>Our vision statement</a>
                                </Link>
                            </li>
                            <li>
                                <i className="bi bi-chevron-double-right"/>
                                <Link href={`/about/core-values`}>
                                    <a>Our vision core-values</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </Layout>
        </>
    )
        ;
};

export default Index;