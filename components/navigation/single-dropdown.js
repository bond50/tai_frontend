import useToggle from "../../hooks/useToggle";
import React, {useEffect, useState} from "react";
import {singleCategory} from "../../actions/category";
import Item from "./item";
import {useRouter} from "next/router";

const SingleDropdown = ({caption, slug}) => {
    const router= useRouter()
    const [closed, toggleClosed] = useToggle();
    const [loadedPages, setLoadedPages] = useState([])


    useEffect(() => {
            singleCategory(slug, 'service-category-name').then(res => {
                setLoadedPages(res.pages)
            })
        }
        ,
        [slug])

    const showLoadedPages = () => {
        return loadedPages.map(pg => {
            return <Item key={pg._id} to={`/tai/${pg.slug}`} active={router.asPath === `/tai/${pg.slug}`} >{pg.title}</Item>
        })
    }
    if (loadedPages.length < 1) {
        return null
    }


    return (
        <li className={`dropdown`} onClick={toggleClosed}>
            <a href={'#'}>
                <span className={router}>{caption} </span> <i
                className="bi bi-chevron-down"/>
            </a>
            <ul className={`${closed ? 'dropdown-active' : null}`}>
                {showLoadedPages()}
            </ul>
        </li>
    );
};

export default SingleDropdown;