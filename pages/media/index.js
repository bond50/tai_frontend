import Link from "next/link";
import Head from "next/head";
import {APP_NAME, DOMAIN,} from "../../config";
import React from "react";
import {useRouter} from "next/router";
import Layout from "../../components/layout";

const Index = () => {
    const router = useRouter()

    const head = () => (
        <Head>
            <title>Media| {APP_NAME}</title>
            <meta
                name="description"
                content={`Welcome to ${APP_NAME} Media section .You can access all images, videos and downloads from this section`}
            />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Media | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`Welcome to ${APP_NAME} Media section .You can access all images, videos and downloads from this section`}
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
            <Layout breadcrumb breadcrumbHeader2=' Useful media links' alt={`${APP_NAME} | Useful media links`}>
                <section>
                    <div className="container page-intro">
                        <h4>Useful Media Links</h4>
                        <ul>
                            <li>
                                <i className="bi bi-chevron-double-right"/>
                                <Link href={`/media/downloads`}>
                                    <a>Gallery</a>
                                </Link>
                            </li>
                            <li>
                                <i className="bi bi-chevron-double-right"/>
                                <Link href={`/media/gallery`}>
                                    <a>The hospital Gallery</a>
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