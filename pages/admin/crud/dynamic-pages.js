import React from 'react'

import PageRead from '../../../components/crud/page-read';
import Layout from "../../../hoc/admin/layout/layout";
import Admin from "../../../components/auth/Admin";


const Blogs = () => {
    return (
        <Layout pageTitle='Manage Dynamic pages'>
            <Admin>
                <PageRead/>
            </Admin>
        </Layout>
    );
};

export default Blogs;