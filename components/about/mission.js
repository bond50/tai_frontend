import React from 'react';
import PageWrapper from "../../hoc/page-wrapper";

const Mission = () => {
        const list = [
        {to:"/about/history", title:"History"},
        {to:"/about/vision", title:"Vision"},
        {to:"/about/core-values", title:"Core values"},
    ]
    return (
        <PageWrapper title='Mision' sidebarTitle='Related' sideList={list}>
             <p>To be one of the Africa’s leading suppliers in institutions and organizations</p>
        </PageWrapper>
    );
};

export default Mission;
