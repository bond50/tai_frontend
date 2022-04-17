import classes from './header-nav.module.css'

import {isAuth} from "../../../../actions/auth";
import {useEffect, useState} from "react";
import {API} from "../../../../config";
import Image from "../../../reusables/lazy/Image";

const HeaderNav = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
        return setMounted(false)
    }, [])

    return (mounted && <div className={`${classes.HeaderNav}`}>
            {isAuth() && <div className={`${classes.Profile}`}>
                <div className={classes.ProfileImage}>
                    <Image
                        src={`${API}/user/photo/${isAuth() && isAuth().username}`}
                        width={40}
                        height={40}
                        alt={`${isAuth() && isAuth().username}'s Photo`}
                        layout="responsive"
                        className={`rounded-circle `}
                    />
                </div>
                <span className="d-none d-md-block dropdown-toggle ps-2">{isAuth().name}</span>
            </div>}
        </div>
    );
};

export default HeaderNav;