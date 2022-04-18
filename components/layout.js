import React from 'react';
import Navigation from "./navigation/navigation";
import Hero from './hero'
import Footer from "./footer/footer";
import SimpleHero from "./simple-hero";

const Layout = ({children, noCarousel, simple, title, className}) => {

    let carousel = <Hero/>
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
            {/*<Footer/>*/}
        </>
    );
};

export default Layout;