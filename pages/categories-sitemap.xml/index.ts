/* eslint-disable */
import {getServerSideSitemap, ISitemapField} from "next-sitemap";
import {GetServerSideProps} from "next";
import {API,  SITE_NAME} from "../../config";


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const response = await fetch(`${API}/categories`);
    const loadedPages: any[] = await response.json();

    const fields: ISitemapField[] = loadedPages.map(({slug}) => ({
        loc: `${SITE_NAME}/categories/${slug}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemap(ctx, fields);
};

export default function Site() {
}