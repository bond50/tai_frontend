import classes from './header-nav.module.css'

import {isAuth, signout} from "../../../../actions/auth";
import {useEffect, useState} from "react";

import Router from "next/router";

const HeaderNav = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
            setMounted(true)
        },

        [])

    return (mounted && <div className={`${classes.HeaderNav}`}>
            {isAuth() && <div className={`${classes.Profile}`}>
                {/*<div className={classes.ProfileImage}>*/}
                {/*    <Image*/}
                {/*        src={`${API}/user/photo/${isAuth() && isAuth().username}`}*/}
                {/*        width={40}*/}
                {/*        height={40}*/}
                {/*        alt={`${isAuth() && isAuth().username}'s Photo`}*/}
                {/*        layout="responsive"*/}
                {/*        className={`rounded-circle `}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<span className="d-none d-md-block dropdown-toggle ps-2">*/}
                {/*    signout*/}
                {/*</span>*/}


                {isAuth() &&  <span className="d-none d-md-block  ps-2"
                    onClick={() => signout(() => Router.replace(`/signin`))}>
                    <a>Signout</a>
                  </span>
                }
            </div>}
        </div>
    );
};

export default HeaderNav;