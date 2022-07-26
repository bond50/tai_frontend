import React, {Fragment} from 'react';
import Navigation from "./navigation/navigation";
import dynamic from 'next/dynamic'
import ScrollTop from "./ScrollTop";
import Breadcrumbs from "./reusables/Breadcrumbs";
const Hero = dynamic(() => import('./hero'))
const Footer = dynamic(() => import('./footer/footer'))


const Layout = ({children, home, alt,header2Class, breadcrumb, breadcrumbHeader2}) => {

    return (
        <Fragment>
            <Navigation/>
            {home && <Hero/>}
            <main id="main">
                {breadcrumb &&
                <Breadcrumbs
                    alt={alt}
                    header2={breadcrumbHeader2}
                    header2Class={header2Class}
                />
                }
                {children}
            </main>
            <Footer/>
            <ScrollTop/>
        </Fragment>
    );
};

export default Layout;

