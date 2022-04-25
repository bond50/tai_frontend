import React, {useEffect, useState} from 'react';
import TopBar from "./top/top-bar";
import Header from "./header";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            <TopBar scrolled={scrolled}/>
            <Header scrolled={scrolled}/>
        </>
    );
};

export default Navigation;