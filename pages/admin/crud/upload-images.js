import React from 'react';
import Admin from '../../../components/auth/Admin';
import Layout from "../../../hoc/admin/layout/layout";
import UploadImages from "../../../components/crud/upload-images";


const Upload = () => {

    return (
        <Layout>
            <Admin>
                <UploadImages/>
            </Admin>
        </Layout>
    );
};

export default Upload;