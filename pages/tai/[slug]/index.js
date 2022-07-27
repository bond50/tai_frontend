/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useEffect, useState} from 'react';
import Head from "next/head";
import {API, APP_NAME, DOMAIN,} from "../../../config";
import {listRelated, singlePage} from "../../../actions/service";
import Layout from "../../../components/layout";
import renderHTML from "html-react-parser";
import Link from "next/link";
import PageWrapper from "../../../hoc/page-wrapper";


const Slug = ({service, query}) => {

    const [related, setRelated] = useState([])
     const [loading, setLoading] = useState(false)

    // const loadRelated = () => {
    //     listRelated({service}).then(data => {
    //         if (data.error) {
    //             console.log(data.error)
    //         } else {
    //             setRelated(data)
    //         }
    //     })
    // };
    //
    // useEffect(() => {
    //     loadRelated()
    // }, [service])
    //

    useEffect(() => {
        const abortCtrl = new AbortController();
        const opts = {
            signal: abortCtrl.signal,
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({service})
        };
        setLoading(true)
        listRelated(opts).then(data => {
            if (data.error) {
                console.log(data.error)
                setLoading(false)
            } else {
                setRelated(data)
                setLoading(false)
            }
        })
        return () => abortCtrl.abort();
    }, [service])



    const head = () => (
        <Head>
            <title>
                {service.title | APP_NAME}
            </title>
            <meta name="description" content={service.metaDesc}/>
            <link rel="canonical" href={`${DOMAIN}/${query.slug}`}/>
            <meta property="og:title" content={service.metaTitle}/>
            <meta property="og:description" content={service.metaDesc}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/${query.slug}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta property="og:image" content={`${API}/service/photo/${service.slug}`}/>
            <meta property="og:image:secure_url" content={`${API}/service/photo/${service.slug}`}/>
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    return (
        <Fragment>
            {head()}
            <Layout breadcrumb breadcrumbHeader2={'Service details'} alt={`${APP_NAME} | ${service.title}`}>
                <PageWrapper
                    title='Core values'
                    service={service}
                    loading={loading}
                    sidebarTitle='Related'
                    sideList={related}
                    className='section-bg' to={'tai'}>
                </PageWrapper>
            </Layout>
        </Fragment>
    )
};
export const getServerSideProps = async ({query}) => {

    return singlePage(query.slug).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {
                props: {service: data, query}
            }
        }
    })
}
export default Slug;