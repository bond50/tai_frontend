import React, {Fragment} from 'react';
import Link from "next/link";
import dayjs from "dayjs";
import classes from "./index.module.css";
import {isAuth} from "../../../actions/auth";


const DynamicTableRows = ({blog, user, team, deleteConfirm, endpoint}) => {
    return (<>
            <tr className={classes.tr}>
                {blog && <Fragment>
                    <td>
                        <Link href={`/profile/${blog.postedBy.username}`}>
                            <a>{isAuth() && isAuth()._id === blog.postedBy._id ? 'Me' : blog.postedBy.name.toLowerCase()}</a>
                        </Link>
                    </td>

                    <td>
                        <h6>{blog.title}</h6>
                    </td>
                    <td> {dayjs(blog.createdAt).format("ddd, MMM D, YYYY h:mm A")}</td>
                    <td>{
                        blog.accepted === false ? <span className="badge bg-warning">Pending</span> :
                            <span className="badge bg-success">Approved</span>
                    }
                    </td>
                    <td className={classes.td}>
                        <Link href={endpoint} passHref>
                        <span className={`badge bg-primary  ${classes.EditBtn}`}>
                            <i className='bi bi-gear'/>
                        </span>
                        </Link>

                        <span className={`badge bg-danger ${classes.EditBtn}`}
                              onClick={() => deleteConfirm(blog.slug, blog.title)}>
                        <i className='bi bi-x-circle'/>
                    </span>
                    </td>
                </Fragment>}


                {user && <Fragment>
                    <td>
                        <Link href={`/profile/${user.username}`}>
                            <a>{isAuth() && isAuth()._id === user._id ? "Me" : user.name.toLowerCase()}</a>
                        </Link>
                    </td>

                    <td>
                        <h6>{user.username}</h6>
                    </td>
                    <td>
                        <h6>{user.role === 1 ? 'admin' : 'standard user'}</h6>
                    </td>
                    <td>
                        <h6>{user.email}</h6>
                    </td>
                    <td className={classes.td}>

                        <Link href={`/profile/${user.username}`} passHref>
                         <span className={`badge bg-primary  ${classes.EditBtn}`}>
                           <i className='bi bi-eye'/>
                       </span>
                        </Link>
                        <Link href={`/admin/crud/users/${user._id}`} passHref>
                       <span className={`badge bg-primary  ${classes.EditBtn}`}>
                           <i className='bi bi-gear'/>
                       </span>
                        </Link>
                        <span className={`badge bg-danger ${classes.EditBtn}`}
                              onClick={() => deleteConfirm(user._id, user.name)}>
                        <i className='bi bi-x-circle'/>
                    </span>
                    </td>
                </Fragment>
                }

                {team && <Fragment>
                    <td>
                        <Link href={`/profile/${team.username}`}>
                            <a>{isAuth() && isAuth()._id === team._id ? "Me" : team.name.toLowerCase()}</a>
                        </Link>
                    </td>

                    <td>
                        <h6>{team.companyRole}</h6>
                    </td>
                    <td>
                        <h6>{team.email}</h6>
                    </td>
                    <td className={classes.td}>
                        <Link href={`/profile/${team.username}`} passHref>
                         <span className={`badge bg-primary  ${classes.EditBtn}`}>
                           <i className='bi bi-eye'/>
                       </span>
                        </Link>
                        <Link href={`/admin/crud/team/${team._id}`} passHref>
                       <span className={`badge bg-primary  ${classes.EditBtn}`}>
                           <i className='bi bi-gear'/>
                       </span>
                        </Link>
                        <span className={`badge bg-danger ${classes.EditBtn}`}
                              onClick={() => deleteConfirm(team._id, team.name)}>
                        <i className='bi bi-x-circle'/>
                    </span>
                    </td>
                </Fragment>
                }
            </tr>
        </>
    );
};

export default DynamicTableRows;