import React from 'react';
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import {BLOG_DOMAIN} from "../../config";

const Footer = () => {
    const {data: services, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!services) return <div id='preloader'/>

    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                {services.map(servive => (
                                    <li key={servive._id}><i className="bx bx-chevrons-right"/>
                                        <Link href={`/tai/${servive.slug}`}>
                                            <a>{servive.title}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact info</h4>
                            <p>
                                Off Nkrumah Road,
                                Third Floor,
                                Taiyebi House,
                                opposite NSSF Building<br/> <br/>
                                P.O.Box 89990-80100
                                Mombasa, Kenya<br/> <br/>
                                <strong>Phone 1:</strong>+254 702356422<br/>
                                <strong>Phone 2:</strong>+254 723422747<br/>
                                <strong>Email:</strong> info@tailifestyle.co.ke<br/>
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
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
                                    <Link href={'/tai/our-history'}>
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


                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Join Our Newsletter</h4>
                            <p>Subscribe to our newsletter to get the latest updates</p>
                            <form action="" method="post">
                                <input type="email" name="email"/>
                                <input type="submit" value="Subscribe"/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright {new Date().getFullYear()} <strong><span>TAI LIFESTYLE LIMITED</span></strong>. All
                    Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;