import React from 'react'
import Home from "../../components/admin/home/home-page";
import Admin from "../../components/auth/Admin";
import dynamic from 'next/dynamic'


import Layout from "../../hoc/admin/layout/layout";


const Index = () => {


    return (
        <Admin>
            <Layout>
                <Home/>
            </Layout>
        </Admin>
    );
};

export default Index;