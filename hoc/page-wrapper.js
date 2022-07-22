import React from 'react';
import Link from "next/link";

const PageWrapper = ({title, children, sideList, sidebarTitle}) => {
    return (

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

    );
};

export default PageWrapper;