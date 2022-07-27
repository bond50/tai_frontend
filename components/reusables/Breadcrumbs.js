// import Breadcrumbs from 'nextjs-breadcrumbs';
// import React from "react";
// import Image from "next/image";
import classes from '../../styles/breadcrumb.module.css'
//
//
// const Breadcrumb = ({header2,alt, header2Class}) => {
//
//     return (
//         <div
//             className={`${classes.breadcrumbs} ${header2Class} d-flex align-items-center text-center`}
//         >
//             <Image
//                 src={`/footer.jpg`}
//                 layout='fill'
//                 objectFit={'cover'}
//                 alt={alt}
//                 objectPosition='center'
//             />
//             <div className="container position-relative d-flex flex-column align-items-center">
//                 <h2>{header2}</h2>
//                 <ol>
//                     <li>
//                         <Breadcrumbs useDefaultStyle/>
//                     </li>
//                 </ol>
//             </div>
//         </div>
//     );
// };
//
// export default Breadcrumb;

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')

};

const Breadcrumbs = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return {breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/')};
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }
    return (


            <div className={`${classes.breadcrumbs} d-flex align-items-center`}
                 style={{backgroundImage: 'url("/footer.jpg")'}}>
                <div className="container position-relative d-flex flex-column align-items-center">
                    <h2>About</h2>
                    <ol>
                        <li>
                            <Link href={`/`}>
                                <a>home</a>
                            </Link>
                        </li>
                        {breadcrumbs.map((breadcrumb, i) => {
                            return (
                                <li key={breadcrumb.href}>
                                    <Link href={breadcrumb.href}>
                                        <a>
                                            {convertBreadcrumb(breadcrumb.breadcrumb)}
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>

                </div>
            </div>



    );
};

export default Breadcrumbs;