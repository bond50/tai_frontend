import Breadcrumbs from 'nextjs-breadcrumbs';
import React from "react";


const Breadcrumb = () => {
    // const [breadcrumbs, setBreadcrumbs] = useState('');
    //
    // const router = useRouter();
    //
    // useEffect(() => {
    //     if (router) {
    //
    //         let linkPath = router.asPath.split('/');
    //         linkPath.pop()
    //         linkPath.shift()
    //
    //         let last = router.asPath.substring(1).replaceAll(/-/g, ' ')
    //         if (linkPath.length > 0) {
    //             last = linkPath[linkPath.length - 1].replace(/-/g, ' ')
    //         }
    //         setBreadcrumbs(last);
    //     }
    // }, [router]);

    return (
        <section id="breadcrumbs" className='breadcrumbs'>
                    <ol>
                        <li>
                            <Breadcrumbs useDefaultStyle/>
                        </li>
                    </ol>
        </section>
    );
};

export default Breadcrumb;