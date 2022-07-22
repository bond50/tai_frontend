import React from 'react';
import Admin from "../../../../components/auth/Admin";
import Layout from "../../../../hoc/admin/layout/layout";
import TeamForm from "../../../../components/crud/team-member-form";


const User = () => {
    return (
        <Admin>
            <Layout>
                <TeamForm/>
            </Layout>
        </Admin>
    );
};

export default User;