import React from 'react';
import Layout from "../components/layout";
import ContactForm from "../components/form/ContactForm";
import {useRouter} from "next/router";
import Head from "next/head";
import { APP_NAME, DOMAIN} from "../config";


const ContactUs = () => {
    const router = useRouter()
    const head = () => (

        <Head>
            <title>Contact Us | {APP_NAME}</title>
            <meta name="title" content={`Contact Us | ${APP_NAME}`}/>
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
            <meta name="keywords" content="Tai, Tai lifestyle ,Tai lifestyle Limited,tailifestyle.com, Contact Us, contact"/>
            <meta name="description" content="For questions about Tai Lifestyle services, we're ready to help."/>

            <meta property="og:title" content={`History | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`For questions about Tai Lifestyle services, we're ready to help`}/>
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
            <meta property="og:image:type" content="image/jpg"/>

        </Head>
    );

    return (

        <>
            {head()}
            <Layout simple title='Contact us'>
                <ContactForm/>
            </Layout>
        </>
    );
};

export default ContactUs;