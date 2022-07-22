import React from 'react';
import {API, APP_NAME} from "../../../../config";
import CardDetail from "../../../../components/admin/home/card-detail";
import DynamicTableRows from "../../../../components/admin/home/dynamic-table-rows";
import Layout from "../../../../hoc/admin/layout/layout";
import Admin from "../../../../components/auth/Admin";
import useFetchUsers from "../../../../hooks/useFetchUsers";
import Alert from "../../../../components/messages/Alert";

const Index = () => {
    const {
        mouseMoveHandler,
        deleteMemberConfirm,
        loading,
        error,
        removed,
        users,
        message
    } = useFetchUsers(`${API}/team-members`)

    const tHeads = [
        {span: '1', title: 'Names'},
        {span: '1', title: 'Company role'},
        {span: '1', title: 'Email'},
        {span: '2', title: 'Action'},
    ]

    function showTableHead() {
        return tHeads.map((col, i) => {
            return <th
                scope="col"
                key={i}
                colSpan={col.span}>{col.title
            }</th>
        })

    }

    function showUsers() {
        if (loading) {
            return <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
        if (error) {
            return <Alert msg={error} label='Danger' type='danger'/>
        }

        return users.length > 0 && <CardDetail
            title={`Team members at ${APP_NAME}`}
            spanText={'Team members'}
            tableHead={showTableHead()}>
            {users.map(user => {
                return <DynamicTableRows
                    key={user._id}
                    deleteConfirm={deleteMemberConfirm}
                    team={user}
                    />
            })}
        </CardDetail>

    }


    return (
        <Admin>
            <Layout>
                <div onMouseMove={mouseMoveHandler}>
                    {removed && <Alert msg={message} label='Success' type='success' reload/>}
                    {showUsers()}
                </div>

            </Layout>
        </Admin>
    );
};

export default Index;