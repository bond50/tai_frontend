import Head from "next/head";
import React, {useState} from "react";
import {listBlogsWithCategoriesAndTags} from "../../actions/blog";
import {APP_NAME, DOMAIN,} from "../../config";
import {withRouter} from "next/router";
import SmallCard from "../../components/card/small-card";
import Layout from "../../components/layout";


const Blogs = ({blogs, totalBlogs, blogsLimit, router}) => {

    const head = () => (
        <Head>
            <title>Blog | {APP_NAME}</title>
            <meta
                name="description"
                content="Tai Lifestyle Limited Latest articles on safety tips when handling asbestos, news ,workers training,our concern about asbestos,disposal of sludge and construction"
            />
            <meta name="keywords"
                  content="Tai, Tai lifestyle ,Tai lifestyle Limited,tailifestyle.com, blog, blog section, news, events, safety tips"/>

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Blog  | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content="Tai Lifestyle Limited Latest articles on safety tips when handling asbestos, news ,workers training,our concern about asbestos,disposal of sludge and construction"
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

    const [limit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button
                    onClick={loadMore}
                    className="btn btn-outline-secondary  btn-sm"
                >
                    Load more
                </button>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className='col-lg-4'>
                    <SmallCard blog={blog}/>
                </div>
            );
        });
    };

    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <div key={i} className='col-lg-4'>
                <SmallCard blog={blog}/>
            </div>
        ));
    };


    return (
        <>
            {head()}
            <Layout simple title='Blog Section'>
                <main>
                    <section className='blog-section'>
                        <div className="container ">
                            <div className='row'>
                                {showAllBlogs()}
                                {showLoadedBlogs()}
                            </div>
                            <div className="text-center pb-3">{loadMoreButton()}</div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
};

export const getServerSideProps = async () => {
    let skip = 0;
    let limit = 6;
    return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props: {
                    blogs: data.blogs,
                    categories: data.categories,
                    totalBlogs: data.size,
                    blogsLimit: limit,
                    blogSkip: skip,
                },
            };
        }
    });
};

export default withRouter(Blogs);
