import React from 'react';
import {mediaList} from "./dropdown-links";
import StaticDropdown from "./custom-dropdown";
import MyLink from "./item";
import {useRouter} from "next/router";

const Media = ({clicked}) => {
   const router= useRouter()


    function showMediaLinks() {
        return mediaList.map(m => {
            return <MyLink key={m._id} to={`/media/${m.slug}`}
                           active={router.asPath ===`/media/${m.slug}`}
                           clicked={clicked}>{m.title}</MyLink>
        })
    }

    return (
        <StaticDropdown text='Media'>
            {showMediaLinks()}
        </StaticDropdown>
    );
};

export default Media;