import React from 'react';
import PageWrapper from "../../hoc/page-wrapper";

const Vision = () => {
    const list = [
        {to: "/about/history", title: "History"},
        {to: "/about/mission", title: "Mission"},
        {to: "/about/core-values", title: "Core values"},
    ]
    return (
        <PageWrapper title='Core values' sidebarTitle='Related' sideList={list}>
            <p>
                Be, and be recognized as, the best services company in the world
            </p>
        </PageWrapper>
    );
};

export default Vision;
