 import React from 'react';
import Navigation from "./navigation/navigation";

import dynamic from 'next/dynamic'
import ScrollTop from "./ScrollTop";
 const Hero  = dynamic(() => import('./hero'))
const AltHero  = dynamic(() => import('./AltHero'))
const SimpleHero  = dynamic(() => import('./simple-hero'))
const Footer  = dynamic(() => import('./footer/footer'))



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
            <Footer/>
            <ScrollTop/>
        </>
    );
};

export default Layout;

