import React from 'react';
import Item from "./item";
import useToggle from "../../hooks/useToggle";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import SingleDropdown from "./single-dropdown";
import {useRouter} from "next/router";
import About from "./about";
import Media from "./media";
import Loader2 from "../loaders/loader1";


const Nav = () => {
    const router = useRouter()

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
        return <Loader2/>
    }


    const showLinks = data.map(link => (
        <SingleDropdown
            key={link._id} info={link}
            closeNav={toggleClosed}/>
    ))


    return (
        <nav id="navbar" className={`${attachedClasses.join(' ')}`}>
            <ul>
                <Item to={`/`} active={router.pathname === "/"} clicked={toggleClosed}>Home</Item>
                <About clicked={toggleClosed}/>
                {showLinks}
                <Item to={`/team`} active={router.pathname === "/team"} clicked={toggleClosed}>Our Team</Item>
                <Item to={`/blogs`} active={router.pathname === "/blogs"} clicked={toggleClosed}>Our Blog</Item>
                <Media clicked={toggleClosed}/>
                <Item to={`/contact`} active={router.pathname === "/contact"} clicked={toggleClosed}>Contact</Item>
                {/*<Item to={`/#about`} clicked={toggleClosed} className='getstarted'>Get Started</Item>*/}
            </ul>
            <i className={`bi bi-${open ? "x" : 'list'} mobile-nav-toggle`} onClick={toggleClosed}/>
        </nav>
    );
};

export default Nav;