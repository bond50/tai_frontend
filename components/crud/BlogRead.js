import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {getCookie, isAuth} from '../../actions/auth';
import {list, removeBlog} from '../../actions/blog';
import dayjs from "dayjs";
import Alert from "../messages/Alert";


const BlogRead = ({username}) => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };

    const deleteBlog = slug => {
        removeBlog(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteBlog(slug);
        }
    };

    const showUpdateButton = blog => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/crud/blog/${blog.slug}`}>
                    <a className="btn mx-3 btn-sm btn-warning">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/blog/${blog.slug}`}>
                    <a className="mx-3 btn btn-sm btn-warning">Update</a>
                </Link>
            );
        }
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className="pb-5">
                    <h6>{blog.title}</h6>
                    <p className="mark">
                        Written by {blog.postedBy.name} | Published on {dayjs(blog.createdAt).format("ddd, MMM D, YYYY h:mm A")}
                    </p>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(blog)}
                </div>
            );
        });
    };


    return (
        <div className="row">
            <div className="col-md-8">
                <h3>Approved Blogs</h3>
                {showAllBlogs()}
                {message && <Alert msg={message} label='Success' type='success'/>}
            </div>
        </div>

    );
};

export default BlogRead;