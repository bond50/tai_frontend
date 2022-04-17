import React from 'react';
import Item from "./item";
import useToggle from "../../hooks/useToggle";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import SingleDropdown from "./single-dropdown";

const Nav = () => {
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
        return <div className='preloader'/>
    }


    const showLinks = data.map(link => (
        <SingleDropdown caption={link.name} slug={link.slug} key={link._id}/>
    ))


    return (
        <nav id="navbar" className={`${attachedClasses.join(' ')}`}>
            <ul>
                <Item to={`/`} active={true} clicked={toggleClosed}>Home</Item>
                {showLinks}
                <Item to={`/team`} clicked={toggleClosed}>Our Team</Item>
                <Item to={`/blogs`} clicked={toggleClosed}>Our Blog</Item>
                <Item to={`/contact`} clicked={toggleClosed}>Contact</Item>
                <Item to={`/`} clicked={toggleClosed} className='getstarted'>Get Started</Item>
            </ul>
            <i className={`bi bi-${open ? "x" : 'list'} mobile-nav-toggle`} onClick={toggleClosed}/>
        </nav>
    );
};

export default Nav;