import Layout from "../../../../hoc/admin/layout/layout";
import Admin from "../../../../components/auth/Admin";
import React from "react";
import MemberUpdateComponent from "../../../../components/crud/member-update-component";
import {useRouter} from "next/router";

const Slug = () => {
const router = useRouter()

    return (
        <Layout>
            <Admin>
                <MemberUpdateComponent id={router.query._id}/>
            </Admin>
        </Layout>
    );
};

export default Slug;