import React from 'react';
import PageWrapper from "../../hoc/page-wrapper";

const Vision = () => {
    const list = [
        {slug: "history", title: "History"},
        {slug: "mission", title: "Mission"},
        {slug: "core-values", title: "Core values"},
    ]
    return (
        <PageWrapper title='Vision' sidebarTitle='Related' sideList={list} to={'about'}>
            <p>
                Be, and be recognized as, the best services company in the world
            </p>
        </PageWrapper>
    );
};

export default Vision;
