import React from 'react';
import useSWR from "swr";
import {fetcher} from "../../components/axios/axios";
import Loader2 from "../../components/loaders/loader2";
import renderHTML from "html-react-parser";
import classes from '../../styles/ItemList.module.css'


import {useRouter} from "next/router";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import Layout from "../../components/layout";
import Link from "next/link";


const Services = () => {

    const router = useRouter()

    const head = () => (
        <Head>
            <title>Products and services | {APP_NAME}</title>
            <meta
                name="description"
                content={`${APP_NAME} Offers various products and services including but not limited to sludge disposal, workers training,construction and Asbestos handling`}
            />
            <meta name="keywords"
                  content="Tai,tailifestyle Tai lifestyle ,Tai lifestyle Limited,tailifestyle.com,Asbestos, Asbestos Handling, Construction, workers training,sludge,sludge disposal sites kenya,sludge disposal in nairobi,sludge disposal"/>

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Products and services | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`${APP_NAME} Offers various products and services including but not limited to sludge disposal, workers training,construction and Asbestos handling`}
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


    const {data: services, error} = useSWR({url: `/services`, method: 'get'}, fetcher);


    if (!services) {
        return <Loader2/>
    } else if (error) {
        return <div>failed to load footer blogs</div>
    }

    return (

        <>
            {head()}
            <Layout breadcrumb breadcrumbHeader2=' Products and Services' alt={`${APP_NAME} | Core values`}>
                <section className={`section-bg ${classes.services}`}>
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            {services.map((service, i) => {
                                return <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                                            data-aos="zoom-in" data-aos-delay={`${i * 100}`} key={service._id}>
                                    <Link href={`/tai/${service.slug}`}>
                                        <div className={classes.iconBox}>
                                            <div className={classes.icon}><i className="bx bx-layer"/></div>
                                            <h4><a href="">{service.title}</a></h4>
                                            {renderHTML(service.excerpt.length >= 100 ? `${service.excerpt.substring(0, 100)}...` : service.excerpt)}
                                        </div>
                                    </Link>
                                </div>

                            })}
                        </div>

                    </div>
                </section>

            </Layout>
        </>

    );
};

export default Services;