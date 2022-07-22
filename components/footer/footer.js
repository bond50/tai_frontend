import React from 'react';
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";


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
                            <h3>Our Services</h3>
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
                                <strong>Mombasa Branch</strong> <br/>
                                <em>Off Nkrumah Road, Third Floor, Taiyebi House,
                                    opposite NSSF Building.</em>
                                <br/>
                                P.O.Box 89990-80100
                                Mombasa, Kenya<br/>
                                <strong>Phone</strong>:+254 798777444 <br/><br/>
                                <strong>Nairobi Branch</strong><br/>
                                <em> Westlands,woodvale Avenue.</em> <br/>
                                P.O box 14505-00800 <br/>
                                <strong>Phone </strong>:+254 798777666<br/><br/>
                                <strong>Email</strong> <br/>info@tailifestyle.co.ke<br/>
                                <strong> Alternative phone <br/></strong>+254 798777999
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
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
                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>About</h4>
                            <p>
                                We are registered with National Construction Authority Category for (4) for Building,
                                road works and water work contractor.
                            </p>
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