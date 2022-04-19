import React from 'react';
import {aboutList} from "./dropdown-links";
import StaticDropdown from "./custom-dropdown";
import MyLink from "./item";
import {useRouter} from "next/router";

const About = ({clicked}) => {
   const router= useRouter()


    function showMediaLinks() {
        return aboutList.map(m => {
            return <MyLink key={m._id} to={`/about/${m.slug}`}
                           active={router.asPath ===`/about/${m.slug}`}
                           clicked={clicked}>{m.title}</MyLink>
        })
    }

    return (
        <StaticDropdown text='About us'>
            {showMediaLinks()}
        </StaticDropdown>
    );
};

export default About;