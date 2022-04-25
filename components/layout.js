import React from 'react';
import Navigation from "./navigation/navigation";

import dynamic from 'next/dynamic'

const Hero  = dynamic(() => import('./hero'))
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
        </>
    );
};

export default Layout;