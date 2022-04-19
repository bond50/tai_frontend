import React from 'react';
import Layout from "../components/layout";
import Link from "next/link";

const PageWrapper = ({title, children, sideList, sidebarTitle}) => {
    return (
        <Layout simple title={title}>
            <div className="container">
                <div id='service'>
                    <div className="wrapper">
                        <section className='service'>
                            {children}
                        </section>
                        <aside className='sticky'>
                            <h3 className="sidebar-title">{sidebarTitle}</h3>
                            <ul>
                                {sideList && sideList.map((list, i) => {
                                    return <li key={i}>
                                        <Link href={list.to}>
                                            <a>{list.title.toLowerCase()}</a>
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PageWrapper;