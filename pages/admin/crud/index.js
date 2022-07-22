import React from 'react';
import Admin from '../../../components/auth/Admin';
import PageCreate from '../../../components/crud/PageCreate';
import Layout from "../../../hoc/admin/layout/layout";


const Blog = () => {
    return (
        <Layout pageTitle='Add a new page'>
            <Admin>
                <PageCreate/>
            </Admin>
        </Layout>
    );
};

export default Blog;