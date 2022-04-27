import React from 'react';
import Link from "next/link";
import Image from "../reusables/lazy/Image";


const Logo = () => {
    return (
        <h1 className="logo">
            <Link href={'/'}>
                <a className="logo">
                    <Image
                        width={92}
                        height={50} src="/log1.png"
                        alt="logo"
                        className="img-fluid"/>
                </a>
            </Link>
        </h1>
    );
};

export default Logo;