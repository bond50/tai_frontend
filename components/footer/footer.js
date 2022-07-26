import React from 'react';
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import classes from '../../styles/Footer.module.css'
import Loader2 from "../loaders/loader2";


const Footer = () => {
    const {data: services, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    const {data: blogs, error: blogErr} = useSWR({url: `/list-recent-blogs`, method: 'get'}, fetcher);

    function showBlogs() {
        if (!blogs) {
            return <Loader2/>
        } else if (blogErr) {
            return <div>failed to load footer blogs</div>
        } else {
            return blogs.map(blog => (
                <li key={blog._id}>
                    <i className="bx bx-chevrons-right"/>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a>{blog.title}</a>
                    </Link>
                </li>
            ))
        }
    }

    function showServices() {
        if (error) {
            return <div>failed to load Featured services</div>
        } else if (!services) {
            return <Loader2/>
        } else {
            return services.map(servive => (
                <li key={servive._id}><i className="bx bx-chevrons-right"/>
                    <Link href={`/tai/${servive.slug}`}>
                        <a>{servive.title}</a>
                    </Link>
                </li>
            ))
        }
    }

    return (
        <>
            {/*    <footer id="footer">*/}
            {/*    <div className="footer-top">*/}
            {/*        <div className="container">*/}
            {/*            <div className="row">*/}
            {/*                <div className="col-lg-3 col-md-6 footer-links">*/}
            {/*                    <h3>Our Services</h3>*/}
            {/*                    <ul>*/}
            {/*                        {services.map(servive => (*/}
            {/*                            <li key={servive._id}><i className="bx bx-chevrons-right"/>*/}
            {/*                                <Link href={`/tai/${servive.slug}`}>*/}
            {/*                                    <a>{servive.title}</a>*/}
            {/*                                </Link>*/}
            {/*                            </li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*                <div className="col-lg-3 col-md-6 footer-contact">*/}
            {/*                    <h4>Contact info</h4>*/}

            {/*                </div>*/}
            {/*                <div className="col-lg-3 col-md-6 footer-links">*/}
            {/*                    <h4>Useful Links</h4>*/}

            {/*                </div>*/}
            {/*                <div className="col-lg-3 col-md-6 footer-newsletter">*/}
            {/*                    <h4>About</h4>*/}
            {/*                    <p>*/}
            {/*                        We are registered with National Construction Authority Category for (4) for Building,*/}
            {/*                        road works and water work contractor.*/}
            {/*                    </p>*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="container">*/}
            {/*        <div className="copyright">*/}
            {/*            &copy; Copyright {new Date().getFullYear()} <strong><span>TAI LIFESTYLE LIMITED</span></strong>. All*/}
            {/*            Rights Reserved*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</footer>*/}


            <footer className={classes.Footer}>

                <div className={classes.Content}>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className={classes.Info}>
                                    <h3>contact <span>information</span></h3>
                                    <p>
                                        <strong>Mombasa Branch</strong> <br/>
                                        Sea View Plaza, 2<sup>nd</sup> Floor-Magaret Avenue, <br/>
                                        Off Mama Ngina Drive, <br/> P.O. box 89990-80100 <br/> Mombasa, Kenya.<br/>
                                        <strong>Phone:</strong> +254 202210391 | +254 798777444<br/> <br/>

                                        <strong>Nairobi Branch</strong> <br/>
                                        Westlands,woodvale Avenue, Madonna house. <br/> P.O. box 14505-00800 <br/>
                                        <strong>Phone </strong>:+254 798777666<br/><br/>
                                        <strong>Email:</strong> info@tailifestyle.co.ke<br/>

                                    </p>
                                </div>
                            </div>


                            <div className={` ${classes.Links} col-lg-3 col-md-6`}>
                                <h4>Featured services</h4>
                                <ul>
                                    {showServices()}
                                </ul>

                            </div>
                            <div className={` ${classes.Links} col-lg-2 col-md-6 `}>
                                <h4>Quick links</h4>
                                <ul>
                                    <li><i className="bx bx-chevrons-right"/>
                                        <Link href={'/'}>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li><i className="bx bx-chevrons-right"/>
                                        <Link href={'/contact'}>
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li><i className="bx bx-chevrons-right"/>
                                        <Link href={'/about/history'}>
                                            <a>about us</a>
                                        </Link>
                                    </li>
                                    <li><i className="bx bx-chevrons-right"/>
                                        <Link href={`/blogs`}>
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li><i className="bx bx-chevrons-right"/>
                                        <Link href={'/team'}>
                                            <a>Our team</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={` ${classes.Links}  col-lg-4 col-md-6 `}>
                                <h4>Recent articles from blog section</h4>
                                <ul>
                                    {showBlogs()}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={`text-center position-relative`}>
                    <div className="container">
                        <div className={classes.Copyright}>
                            &copy; Copyright {new Date().getFullYear()}
                            <strong><span> TAI LIFESTYLE LIMITED</span></strong>.
                            All
                            Rights Reserved
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;