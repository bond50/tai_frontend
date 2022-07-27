import React from 'react';
import Link from "next/link";
import classes from '../styles/pageWrapper.module.css'
import Image from "../components/reusables/lazy/Image";
import renderHTML from "html-react-parser";
import Loader1 from "../components/loaders/loader1";

const PageWrapper = ({service, children, loading, header, sideList, alt, src, className, to, sidebarTitle}) => {
    console.log(service)
    let heading = <h3 className={classes.header3}>{header}</h3>
    let renderedBody = children
    if (service) {
        heading = <h3 className={classes.header3}>{service.title}</h3>
        renderedBody = renderHTML(service.body)
    }

    function side() {
        if (loading) {
            return <Loader1/>
        } else {
            return sideList.map((list, i) => {
                return <Link href={`/${to}/${list.slug}`} key={i}>
                    <a>{list.title.toLowerCase()}</a>
                </Link>
            })
        }

    }


    return (
        <section className={`${classes.section} ${className}`}>
            <div className='container'>
                <div className="row ">
                    <div className={`${classes.sticky} col-lg-4 order-2 order-lg-1`}>
                        <h4 className={classes.header}>{sidebarTitle}</h4>
                        {side()}
                    </div>
                    <div className={`col-lg-6 order-1 order-lg-2 ${classes.body}`}>
                        {service.imgHeight && service.width && <Image
                            src={src}
                            alt={alt} className="img-fluid"
                            width={service.imgWidth}
                            height={service.imgHeight}
                        />}

                        {heading}
                        {renderedBody}
                    </div>

                </div>
            </div>
        </section>

    );
};

export default PageWrapper;


// import React from 'react';
// import classes from '../styles/pageWrapper.module.css'
// const PageWrapper = () => {
//     return (
//         <section id="service-details" className="service-details">
//             <div className="container" data-aos="fade-up" data-aos-delay="100">
//
//                 <div className="row gy-4">
//                     <div className={`${classes.sticky} col-lg-4`}>
//                         <div className="services-list">
//                             <a href="#" className="active">Remodeling</a>
//                             <a href="#">Construction</a>
//                             <a href="#">Product Management</a>
//                             <a href="#">Repairs</a>
//                             <a href="#">Design</a>
//                         </div>
//                     </div>
//
//                     <div className="col-lg-8">
//                         <img src="/footer.jpg" alt="" className="img-fluid services-img"/>
//                         <h3>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut
//                             voluptas</h3>
//                         <p>
//                             Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur
//                             et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe
//                             perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos
//                             deleniti officia qui.
//                         </p>
//                         <ul>
//                             <li><i className="bi bi-check-circle"></i>
//                                 <span>Aut eum totam accusantium voluptatem.</span></li>
//                             <li><i className="bi bi-check-circle"></i> <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span>
//                             </li>
//                             <li><i className="bi bi-check-circle"></i>
//                                 <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
//                         </ul>
//                         <p>
//                             Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam
//                             sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
//                         </p>
//                         <p>
//                             Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur
//                             recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati
//                             fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa
//                             perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate
//                             et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut
//                             pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias
//                             explicabo ea.
//                         </p>
//                     </div>
//
//                 </div>
//
//             </div>
//         </section>
//     );
// };
//
// export default PageWrapper;