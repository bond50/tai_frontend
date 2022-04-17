import React from 'react';
import Navigation from "./navigation/navigation";
import Hero from './hero'
import useSWR from "swr";
import {fetcher} from "./axios/axios";
import Footer from "./footer/footer";
import SimpleHero from "./simple-hero";

const Layout = ({children, noCarousel, simple, title, className}) => {
    const {data, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    let carousel = <Hero heroData={data}/>
    if (noCarousel) {
        carousel = null
    }
    if (simple) {
        carousel = <SimpleHero title={title}/>
    }
    return (
        <>
            <Navigation/>
            {carousel}
            <main className={className ? className : null}>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;