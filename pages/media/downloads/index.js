import React from "react";
import useSWR from 'swr'
import {fetcher} from "../../../components/reusables/functions/fetcher";
import {API, APP_NAME, DOMAIN} from "../../../config";
import DownloadList from "../../../components/media/downloads/download-list";
import {useRouter} from "next/router";
import Head from "next/head";
import Layout from "../../../components/layout";

const Downloads = () => {
    const router = useRouter()
    const head = () => (
        <Head>
            <title>Downloads | {APP_NAME}</title>
            <meta
                name="description"
                content={`Tai Lifestyle Limited is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya. `}
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Downloads | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`Tai Lifestyle Limited is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya. `}
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
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    const {data: files, error} = useSWR(`${API}/get-downloads`, fetcher)


    if (error) return <div>failed to load</div>
    if (!files) return <div className='preloader'/>

    return (
        <>
            {head()}
            <Layout title='Downloads' simple>
                <DownloadList files={files}/>
            </Layout>
        </>
    );
};

export default Downloads;