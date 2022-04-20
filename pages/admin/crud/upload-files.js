import React from 'react';
import Admin from '../../../components/auth/Admin';
import Layout from "../../../hoc/admin/layout/layout";
import UploadFiles from "../../../components/crud/upload-files";


const Upload = () => {
    return (
        <Layout>
            <Admin>
                <UploadFiles/>
            </Admin>
        </Layout>
    );
};

export default Upload;