import CardDetail from "./card-detail";
import DynamicTableRows from "./dynamic-table-rows";

import useARP from "../../../hooks/useARP";
import {Fragment} from "react";
import Alert from "../../messages/Alert";

const ApprovedPages = () => {
    const {
        mouseMoveHandler,
        loading,
        deleteConfirm,
        error,
        removed,
        data: blogs,
        message
    } = useARP('/services')


    function showBlogs() {
        if (loading) {
            return <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
        if (error) {
            return <Alert msg={error} label='Danger' type='danger'/>
        }

        return blogs.length > 0 && <CardDetail title='Approved Pages' spanText={'active pages'}>
            {blogs.map(blog => {
                return <Fragment key={blog._id}>
                    <DynamicTableRows blog={blog} deleteConfirm={deleteConfirm} endpoint={`/admin/crud/${blog.slug}`}/>
                </Fragment>
            })}
        </CardDetail>
    }
    return (
        <div onMouseMove={mouseMoveHandler}>
            {removed && <Alert msg={message} label='Success' type='success' reload/>}
            {showBlogs()}
        </div>
    );
};

export default ApprovedPages;