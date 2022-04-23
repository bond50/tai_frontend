import Gallery from "../../../components/media/gallery/gallery-wrapper";
import useSWR from "swr";
import {API, APP_NAME, DOMAIN,} from "../../../config";
import {fetcher} from "../../../components/reusables/functions/fetcher";
import React from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Layout from "../../../components/layout";


const GalleryIndex = () => {

    const router = useRouter()
    const head = () => (
        <Head>
            <title>Gallery | {APP_NAME}</title>
            <meta
                name="description"
                content={`Tai Lifestyle Limited is a private liability company, registered and incorporated under the company act, 2015 cap 486 of the laws of Kenya. `}
            />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Gallery | ${APP_NAME}`}/>
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
    const {data, error} = useSWR(
        [
            `${API}/get-gallery`,
        ],
        fetcher,
        {
            revalidateOnFocus: false,
        },
    );

    if (!data) {
        return <div className='preloader'/>
    }
    if (error) {
        return 'Failed to load images from cloudinary '
    }


    return (
        <>
            {head()}
            <Layout noCarousel>
                <Gallery
                    data={data}/>
            </Layout>
        </>
    );
};

export default GalleryIndex;