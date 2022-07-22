import React from 'react';
import Admin from '../../../components/auth/Admin';
 import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../../hoc/admin/layout/layout'))
const UploadImages = dynamic(() => import('../../../components/crud/upload-images'))

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