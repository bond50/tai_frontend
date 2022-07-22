import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import PageWrapper from "../../hoc/page-wrapper";

const CoreValues = () => {
    const values = [
        {
            title: "Safety",
            content: "The safety of our employees, public and environment is everyone’s responsibility.  We Plan safety into every aspect of our work and do not deviate from that plan. "
        },
        {
            title: "Integrity",
            content: "Our business conduct will include the highest level of honesty, ethics, and moral correctness. We do not compromise employees, customers, or our company in the course of conducting our assignments."
        },
        {
            title: "Teamwork",
            content: "Our culture of teamwork allows us to work together within the Company, and with our customers to deliver better solutions and collectively accomplish our goals."
        },
        {
            title: "Transparency",
            content: "Our actions must match our words. Each day we strive to earn our reputation rather than simply manage it. To that end, we operate in a manner in which our integrity and values cannot be questioned, hence we embrace authenticity"
        },
        {
            title: "Accountability",
            content: "Each individual is fully accountable for his or her decisions and actions."
        },
        {
            title: "Leadership",
            content: "Each day, every employee is expected to give the best of them, to strive constantly for quality and to demonstrate the highest level of professionalism and to lead by example."
        },
        {
            title: "Professionalism",
            content: "We believe that the key to quality and efficiency is professionalism, hence our emphasis entails having expertise based on a deep level of knowledge, and having a commitment to the area of practice - possibly (but not necessarily) through being a member of a relevant professional body."
        },
    ]

    const list = [
        {to:"/about/mission", title:"Mission"},
        {to:"/about/vision", title:"Vision"},
        {to:"/about/history", title:"History"},
    ]

    return <PageWrapper title='Core values'  sidebarTitle='Related' sideList={list}>
        <div className="values">
            <div className="accordion-list">
                {values && values.map((item, i) => {
                    return (
                        <Accordion defaultActiveKey='0' key={i}>
                            <Accordion.Item eventKey={i.toString()}>
                                <Accordion.Header>
                                    <span>{`0${i + 1}`}</span>{item.title.toLowerCase()}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {item.content}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    );
                })}
            </div>
        </div>


    </PageWrapper>


}
export default CoreValues;