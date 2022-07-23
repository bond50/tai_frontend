import {listRelated, singleBlog} from "../../actions/blog";
import {API, APP_NAME, DOMAIN} from "../../config";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import Card from "../../components/card/Card";

import Layout from "../../components/layout";
import BlogSideBarContent from "../../components/sidebar/sidebar-content";
import SmallCard from "../../components/card/small-card";


const SingleBlog = ({blog, query}) => {
    const [related, setRelated] = useState([])
    useEffect(() => {
        const abortCtrl = new AbortController();
        const opts = {
            signal: abortCtrl.signal,
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({blog})
        };
        listRelated(opts).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setRelated(data)
            }
        })
        return () => abortCtrl.abort();
    }, [blog])


    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc}/>
            <meta name="keywords"
                  content={`Tai, Tai lifestyle ,Tai lifestyle Limited,tailifestyle.com, ${blog.title}`}/>
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`}/>
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`}/>
            <meta property="og:description" content={blog.mdesc}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`}/>
            <meta property="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`}/>
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    const showBlog = () => {
        return <Card blog={blog}/>
    };


    const showRelatedBlog = () => {
        return related.map(blog => (
            <div className="col-lg-4 col-md-6" key={blog._id}>
                <article>
                    <SmallCard blog={blog}/>
                </article>
            </div>
        ));
    };


    return (
        <>
            {head()}
            <Layout simple title={blog.title}>
                <div className="container">
                    <div id='single-blog'>
                        <div className="row mt-5">
                            <div className='col-lg-8 col-sm-12'>
                                {showBlog()}
                            </div>
                            <aside className=' col-lg-4 col-sm-12 side'>
                                <BlogSideBarContent/>
                            </aside>
                        </div>
                    </div>
                    <div className="row">
                        <h3>Related articles</h3>
                        {showRelatedBlog()}
                    </div>
                </div>
            </Layout>

        </>
    );
};


export const getServerSideProps = async ({query}) => {

    return singleBlog(query.slug).then(data => {
        if (data.error) {
            return <p>haha</p>

        } else {
            return {
                props: {blog: data, query}
            }
        }
    })
}


export default SingleBlog;