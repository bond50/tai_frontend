import React from 'react';
import useSWR from "swr";
import {API} from "../../../../config";
import {fetcher} from "../../../../components/reusables/functions/fetcher";
import {useRouter} from "next/router";
import Layout from "../../../../components/layout";

import dynamic from 'next/dynamic'

const GalleryWrapper = dynamic(() => import('../../../../components/media/gallery/gallery-wrapper'))


const Slug = () => {
    const router = useRouter()
    const {data, error} = useSWR(
        [
            `${API}/gallery-data/${router.query.slug}`,
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
        <Layout noCarousel>
            <GalleryWrapper data={data.data}/>
        </Layout>

    );
};

export default Slug;