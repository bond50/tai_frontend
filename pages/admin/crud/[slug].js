import Admin from "../../../components/auth/Admin";
import PageUpdate from "../../../components/crud/page-update";
import Layout from "../../../hoc/admin/layout/layout";
import React from "react";


const Slug = () => {

    return (
        <Layout>
            <Admin>
                <PageUpdate/>
            </Admin>
        </Layout>
    );
};

export default Slug;