import useToggle from "../../hooks/useToggle";
import React, {useEffect, useState} from "react";
import {singleCategory} from "../../actions/category";
import Item from "./item";
import {useRouter} from "next/router";


const SingleDropdown = ({info,closeNav}) => {
    const router = useRouter()
    const [closed, toggleClosed] = useToggle();
    const [loadedPages, setLoadedPages] = useState([])


    useEffect(() => {
            singleCategory(info.slug, 'service-category-name').then(res => {
                setLoadedPages(res.pages)
            })
        }
        ,
        [info.slug])


    const showLoadedPages = () => {
        return loadedPages.map(pg => {
            return <Item
                clicked={closeNav}
                key={pg._id} to={`/tai/${pg.slug}`}
                active={router.asPath === `/tai/${pg.slug}`}>{pg.title}
            </Item>
        })
    }
    if (loadedPages.length < 1) {
        return null
    }


    return (
        <li className={`dropdown`} onClick={toggleClosed}>
            <a href={'#'}>
                <span className={router}>{info.name} </span> <i
                className="bi bi-chevron-down"/>
            </a>
            <ul className={`${closed ? 'dropdown-active' : null}`}>
                {showLoadedPages()}
            </ul>
        </li>
    );
};

export default SingleDropdown;