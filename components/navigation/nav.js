import React from 'react';
import Item from "./item";
import useToggle from "../../hooks/useToggle";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import SingleDropdown from "./single-dropdown";
import {API, BLOG_DOMAIN} from "../../config";
import {useRouter} from "next/router";
import About from "./about";

const Nav = () => {
    const router = useRouter()
    console.log(router.asPath)

    let route = `${API}/`
    console.log()

    const [open, toggleClosed] = useToggle();
    let attachedClasses = [`navbar`];

    if (open) {
        attachedClasses.push('navbar-mobile')
    }

    const {data, error} = useSWR({url: `/service-categories`, method: 'get'}, fetcher);
    if (error) {
        return <p>failed to load categories</p>
    }

    if (!data) {
        return <div id='preloader'/>
    }


    const showLinks = data.map(link => (
        <SingleDropdown caption={link.name} slug={link.slug} key={link._id}/>
    ))


    return (
        <nav id="navbar" className={`${attachedClasses.join(' ')}`}>
            <ul>
                <Item to={`/`} active={router.pathname === "/"} clicked={toggleClosed}>Home</Item>
                <About clicked={toggleClosed}/>
                {showLinks}
                <Item to={`/team`} active={router.pathname === "/team"} clicked={toggleClosed}>Our Team</Item>
                <Item to={`/blogs`} active={router.pathname === "/blogs"} clicked={toggleClosed}>Our Blog</Item>
                <Item to={`/contact`} active={router.pathname === "/contact"} clicked={toggleClosed}>Contact</Item>
                <Item to={`/`} clicked={toggleClosed} className='getstarted'>Get Started</Item>
            </ul>
            <i className={`bi bi-${open ? "x" : 'list'} mobile-nav-toggle`} onClick={toggleClosed}/>
        </nav>
    );
};

export default Nav;