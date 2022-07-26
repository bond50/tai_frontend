import Breadcrumbs from 'nextjs-breadcrumbs';
import React from "react";
import Image from "next/image";
import classes from '../../styles/breadcrumb.module.css'


const Breadcrumb = ({header2,alt, header2Class}) => {

    return (
        <div
            className={`${classes.breadcrumbs} ${header2Class} d-flex align-items-center text-center`}
        >
            <Image
                src={`/footer.jpg`}
                layout='fill'
                objectFit={'cover'}
                alt={alt}
                objectPosition='center'
            />
            <div className="container position-relative d-flex flex-column align-items-center">
                <h2>{header2}</h2>
                <ol>
                    <li>
                        <Breadcrumbs useDefaultStyle/>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Breadcrumb;