import classes from './admin-sidebar.module.css'
import React from "react";
import Accordion2 from "../../reusables/Accordion2";
import {accordionFunction} from "../../reusables/functions/admin-accordion";
import {accordionPrivateFunction} from "../../reusables/functions/private-accordion";
import AdminSidebarLink from "../../reusables/ui/admin-Sidebar-link";

import {isAuth} from "../../../actions/auth";
import SidebarLink from "../../reusables/ui/sidebar-link";
import PrivateSidebarLink from "../../reusables/ui/private-sidebar-link";


const AdminSidebar = ({closed}) => {
    let attachedClasses = [classes.Sidebar, classes.CloseMobile];

    if (closed) {
        attachedClasses = [classes.Sidebar, classes.Close];
    }

    //user
    const userBlogList = [
        {title: 'Write a blog', to: 'crud/blog/'},
        {title: 'Update/delete a blog', to: 'crud/blog/blogs'},
    ]


    const profileList = [
        {title: 'Update', to: 'update'},
    ]


    //admin

    const blogList = [
        {title: 'Categories', slug: 'crud/blog/category-tag'},
        {title: 'Tags', slug: 'crud/blog/category-tag'},
        {title: 'Write a blog', slug: 'crud/blog'},
        {title: 'Update/delete a blog', slug: 'crud/blog/blogs'},
    ]
    const aboutList = [
        {title: 'Add core values', slug: 'crud/core-values'},

    ]

    const serviceList = [
        {title: 'Categories', slug: 'crud/service-category'},
        {title: 'Create  page', slug: 'crud/'},
        {title: 'Update/delete a page', slug: 'crud/dynamic-pages'},
    ]

    const downloadList = [
        {title: 'Upload', slug: 'crud/upload-files'},
        {title: 'Tags', slug: 'crud/document-tag'},
    ]
    const galleryList = [
        {title: 'Upload', slug: 'crud/upload-images'},
        {title: 'Tags', slug: 'crud/gallery-tag'},
    ]


    const userList = [
        {title: 'Add  User', slug: 'crud/users/user'},
        {title: 'Manage existing users', slug: 'crud/users'},
    ]

    const teamList = [
        {title: 'Add  Team Member', slug: 'crud/team/new-member'},
        {title: 'Manage Team Member', slug: 'crud/team/'},
    ]


    if (isAuth() && isAuth().role === 0) {
        return <aside className={attachedClasses.join(' ')}>
            <ul className={classes.SidebarList}>
                <li className={classes.NavHeading}>Dashboard</li>
                <PrivateSidebarLink
                    title={'Home'}
                    slug={''}
                    icon={'house'}
                />
                <li
                    className={classes.NavHeading}>Quick links
                </li>
                <SidebarLink
                    title={'Website home page'}
                    slug={'/'}
                    icon={'house'}/>

                <SidebarLink
                    title={'Blog section'}
                    slug={'/blogs'}
                    icon={'grid'}/>
                <li
                    className={classes.NavHeading}>Pages
                </li>
                <Accordion2
                    title='Blog'
                    icon='journal-album'>
                    <>
                        {accordionPrivateFunction(userBlogList)}
                    </>
                </Accordion2>


                <Accordion2 title='Profile' icon='journal'>
                    <>
                        {accordionPrivateFunction(profileList)}
                    </>
                </Accordion2>
            </ul>
        </aside>
    }

    if (isAuth() && isAuth().role === 1) {
        return (

            <aside className={attachedClasses.join(' ')}>
                <ul className={classes.SidebarList}>
                    <li className={classes.NavHeading}>Dashboard</li>
                    <AdminSidebarLink
                        title={'Admin home'}
                        slug={''}
                        icon={'house'}
                    />
                    <li
                        className={classes.NavHeading}>Quick links
                    </li>
                    <SidebarLink
                        title={'Website home page'}
                        slug={'/'}
                        icon={'house'}/>

                    <SidebarLink
                        title={'Realtime Google Analytics'}
                        slug={'https://analytics.google.com/analytics/web/#/p306834202/realtime/overview?params=_u..nav%3Dmaui'}
                        icon={'house'}/>

                    <SidebarLink
                        title={'Blog section'}
                        slug={'/blogs'}
                        icon={'grid'}/>

                    <li
                        className={classes.NavHeading}>Pages
                    </li>
                    <AdminSidebarLink
                        title={'Customize Home page'}
                        slug={''} icon={'grid'}/>
                    <Accordion2
                        title='Core values'
                        icon='journal-album'>
                        <>
                            {accordionFunction(aboutList)}
                        </>
                    </Accordion2>
                    <Accordion2
                        title='Blog'
                        icon='journal-album'>
                        <>
                            {accordionFunction(blogList)}
                        </>
                    </Accordion2>
                    <Accordion2 title='Dynamic pages' icon='journal'>
                        <>
                            {accordionFunction(serviceList)}
                        </>
                    </Accordion2>
                    <li className={classes.NavHeading}>Media</li>
                    <Accordion2 title='Downloads' icon='journal'>
                        <>
                            {accordionFunction(downloadList)}
                        </>
                    </Accordion2>
                    <Accordion2 title='Gallery' icon='journal'>
                        <>
                            {accordionFunction(galleryList)}
                        </>
                    </Accordion2>
                    <li className={classes.NavHeading}>Staff</li>

                    <Accordion2 title='Team' icon='journal'>
                        <>
                            {accordionFunction(teamList)}
                        </>
                    </Accordion2>
                    <Accordion2 title='Users' icon='journal'>
                        <>
                            {accordionFunction(userList)}
                        </>
                    </Accordion2>

                    <Accordion2 title='Profile' icon='journal'>
                        <>
                            {accordionPrivateFunction(profileList)}
                        </>
                    </Accordion2>
                </ul>
            </aside>
        )
    } else
        return <p>loading</p>
};

export default AdminSidebar;