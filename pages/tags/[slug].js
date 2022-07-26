import {singleTag} from "../../actions/tag";
import Head from "next/head";
import {APP_NAME, DOMAIN,} from "../../config";
import React from "react";
import SmallCard from "../../components/card/small-card";
import Layout from "../../components/layout";


const Tag = ({tag, blogs, query}) => {
    const head = () => (
        <Head>
            <title>
                {tag.name} | {APP_NAME}
            </title>
            <meta name="description" content={`${APP_NAME} blogs on ${tag.name}`}/>

            <link rel="canonical" href={`${DOMAIN}/tags/${query.slug}`}/>
            <meta property="og:title" content={`${tag.title}| ${APP_NAME}`}/>
            <meta property="og:description" content={`${APP_NAME} blogs on ${tag.name}`}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/tags/${query.slug}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta property="og:image"
                  content={`/late.jpg`}/>
            <meta property="og:image:secure_url"
                  content={`/late.jpg`}/>
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    return (
        <>
            {head()}
            <Layout breadcrumb breadcrumbHeader2={tag.name} alt={`${APP_NAME} | ${tag.name}`}>
                <section className='blog-section'>
                    <div className="container mt-2">
                        <div className="row">
                            {blogs.map(blog => {
                                return <div className="col-md-4" key={blog._id}>
                                    <article>
                                        <SmallCard blog={blog}/>
                                    </article>
                                </div>
                            })}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )

};
export const getServerSideProps = async ({query}) => {
    return singleTag(query.slug, 'tag').then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {
                props: {
                    tag: data.tag,
                    blogs: data.blogs,
                    query
                }
            }
        }
    })
}

export default Tag;