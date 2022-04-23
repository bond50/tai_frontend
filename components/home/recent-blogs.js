import React from 'react';
import Image from "next/image";
import moment from "moment";
import {API} from "../../config";
import renderHTML from "react-render-html";
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";


const RecentBlogs = () => {
    const {data: blogs, error} = useSWR({url: `/list-recent-blogs`, method: 'get'}, fetcher);
    if (error) return <div>failed to load recent blogs</div>
    if (!blogs) return <div id='preloader'/>
    return (
        <section id="home-blog" className="home-blog">

            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>blog</h2>
                    <h3>Latest <span>News and Events</span></h3>
                    <p>Tai Lifestyle has an multi user blog platform where we post various articles on lifestyle,
                        safety tips , news ,etc. You can visit our <Link href='/blogs'>
                            <a>blog  section </a>
                        </Link>for more information. Here are our
                        latest three articles
                    </p>
                </div>

                <div className="row">
                    {blogs.map(blog => {
                        return <div className="col-lg-4" key={blog._id}>
                            <div className='post-box'>
                                <div className='post-image'>
                                    <Image
                                        width={2560}
                                        height={1600}
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        className="img-fluid"
                                        alt={blog.title}/>
                                </div>
                                <span
                                    className='post-date'> {moment(blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                <h3 className='post-title'>{blog.title.toLowerCase()}</h3>
                                {renderHTML(blog.excerpt.length >= 160 ? `${blog.excerpt.substring(0, 80)}...` : blog.excerpt)}
                                <Link href={`/blogs/${blog.slug}`}>
                                    <a className={`l-btn  mt-auto`}>
                                        <span> More about the article</span><i
                                        className="bi bi-arrow-right"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    })}


                </div>

            </div>

        </section>
    )
        ;
};

export default RecentBlogs;