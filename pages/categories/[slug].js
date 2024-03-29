import {singleCategory} from "../../actions/category";
import Head from "next/head";
import {APP_NAME, DOMAIN,} from "../../config";
import React from "react";
import SmallCard from "../../components/card/small-card";
import Layout from '../../components/layout';



const Category = ({category, blogs, query}) => {
    const head = () => (
        <Head>
            <title>
                {category.name} | {APP_NAME}
            </title>
            <meta name="description" content={`${APP_NAME} blogs on ${category.name}`}/>
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`}/>
            <meta property="og:title" content={`${category.title}| ${APP_NAME}`}/>
            <meta property="og:description" content={`${APP_NAME} blog on ${category.name}`}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta property="og:image"
                  content={`/late.jpg`}/>
            <meta property="og:image:secure_url"
                  content={`/late.jpg`}/>
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>

    );

    const showCats = () => {
        return blogs.map((blog, i) => (
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog={blog}/>
                </article>
            </div>
        ));
    };


    return (
        <>
            {head()}
             <Layout breadcrumb breadcrumbHeader2={category.name} alt={`${APP_NAME} | ${category.name}`}>
                <section className='blog-section'>
                    <div className="container mt-2">
                        <div className="row">{showCats()}</div>
                    </div>
                </section>
            </Layout>
        </>
    );
};
export const getServerSideProps = async ({query}) => {

    return singleCategory(query.slug, 'category').then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {
                props: {
                    category: data.category,
                    blogs: data.blogs,
                    query
                }
            }
        }
    })
}

export default Category;