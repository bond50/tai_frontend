import React from 'react';
import PageWrapper from "../../hoc/page-wrapper";

const Mission = () => {
    const list = [
        {slug: "history", title: "History"},
        {slug: "vision", title: "Vision"},
        {slug: "core-values", title: "Core values"},
    ]
    return (
        <PageWrapper title='Mision' sidebarTitle='Related' sideList={list} to={'about'}>
            <p>To be one of the Africa’s leading suppliers in institutions and organizations</p>
        </PageWrapper>
    );
};

export default Mission;
