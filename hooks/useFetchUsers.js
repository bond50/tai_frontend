import React, {useEffect, useState} from 'react';
import {getCookie} from "../actions/auth";
import {removeUser} from "../actions/user";
import {removeMember} from "../actions/team";
import axiosInstance from "../components/axios/axios";

const useFethUsers = (url) => {
    const [values, setValues] = useState({
        error: false,
        loading: false,
        message: '',
        users: [],
        removed: false,
        reload: false
    });

    const {error, users, message, removed, loading, reload} = values
    useEffect(() => {
        setValues({...values, loading: true, error: false})
        axiosInstance.get(url)
            .then(response => {
                setValues({...values, users: response.data, loading: false})
            }).catch(err => {
            if (err.response.status) {
                setValues({...values, error: 'Oops! something went wrong', loading: false})
            }
        })

    }, [reload, url])


    const token = getCookie('token');


    const mouseMoveHandler = e => {
        setValues({...values, error: false, removed: false});
    };

    const deleteUser = id => {
        removeUser(token, id).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({...values, error: false, message: data.message, removed: !removed, reload: !reload});

            }
        });
    };
    const deleteConfirm = (id, title) => {
        let answer = window.confirm(`Are you sure you want to delete ${title}`)
        if (answer) {
            deleteUser(id)
        }
    };
    const deleteMember = id => {
        removeMember(token, id).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({...values, error: false, message: data.message, removed: !removed, reload: !reload});

            }
        });
    };
    const deleteMemberConfirm = (id, title) => {
        let answer = window.confirm(`Are you sure you want to delete ${title}`)
        if (answer) {
            deleteMember(id)
        }
    };

    return {
        mouseMoveHandler,
        deleteConfirm,
        deleteMemberConfirm,
        loading,
        error,
        removed,
        message,
        users,

    }
};

export default useFethUsers;