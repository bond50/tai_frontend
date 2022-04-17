import React, {Fragment, useEffect, useState} from 'react';
import Head from "next/head";
import {API, APP_NAME, DOMAIN,} from "../../../config";
import {listRelated, singlePage} from "../../../actions/service";
import Layout from "../../../components/layout";
import renderHTML from "react-render-html";
import Link from "next/link";


const Slug = ({service, query}) => {

    const [related, setRelated] = useState([])

    const loadRelated = () => {
        listRelated({service}).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setRelated(data)
            }
        })
    };

    useEffect(() => {
        loadRelated()
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
            <Layout simple title={service.title}>
                <div className="container">
                    <div id='service'>
                        <div className="wrapper">
                            <section className='service'>
                                <div className="container">
                                    {renderHTML(service.body)}
                                </div>
                            </section>
                            <aside className='sticky'>
                                <h3 className="sidebar-title">Related pages</h3>
                                <ul>
                                    {related.map(service => {
                                        return <li key={service._id}>
                                            <Link href={`/tai/${service.slug}`}>
                                                <a>{service.title.toLowerCase()}</a>
                                            </Link>
                                        </li>
                                    })}
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
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