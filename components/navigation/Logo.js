import React from 'react';
import Link from "next/link";
import Image from "next/image";
import classes from '../../styles/Logo.module.css'

const Logo = () => {
    return (

            <Link href={'/'}>
                <a className={classes.Logo}>
                    <Image
                        width={618}
                        height={336} src="/log1.png"
                        alt="logo"
                        />
                </a>
            </Link>
    );
};

export default Logo;