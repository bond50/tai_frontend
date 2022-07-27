import React, {Fragment} from 'react';
import Navigation from "./navigation/navigation";
import dynamic from 'next/dynamic'
import ScrollTop from "./ScrollTop";
import Breadcrumbs from "./reusables/Breadcrumbs";

const Hero = dynamic(() => import('./hero'))
const Footer = dynamic(() => import('./footer/footer'))


const Layout = ({children, home, alt, noBread, breadcrumb, breadcrumbHeader2}) => {

    return (
        <Fragment>
            <Navigation/>
            {home && <Hero/>}
            <main id="main">
                {breadcrumb &&
                <Breadcrumbs
                    alt={alt}
                    header2={breadcrumbHeader2}
                    noBread={noBread}
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

