import React from 'react';
import Layout from "../../../hoc/admin/layout/layout";
import Admin from "../../../components/auth/Admin";
import ValueCreate from "../../../components/crud/value-create";

const CoreValues = () => {
    return (
       <Layout pageTitle='Manage Core Values'>
            <Admin>
                <ValueCreate/>
            </Admin>
        </Layout>
    );
};

export default CoreValues;