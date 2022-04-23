import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <h1 className="logo">
            <Link href={'/'}>
                {/*Tai Lifestyle*/}
                <a className="logo"><Image width={695} height={359} src="/log1.png" alt="" className="img-fluid"/></a>
            </Link>
        </h1>
    );
};

export default Logo;