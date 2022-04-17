import React from 'react';
import Layout from "../../components/layout";
import Team from "../../components/team";
import useSWR from "swr";
import {fetcher} from "../../components/axios/axios";


const Index = () => {
    const {data, error} = useSWR({url: `/team-members`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            <Layout simple title='Our team'>
                <Team members={data}/>
            </Layout>
        </>
    );
};

export default Index;