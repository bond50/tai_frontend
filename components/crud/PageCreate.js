/* eslint-disable react-hooks/exhaustive-deps */
import CreateForm from "../reusables/forms/CreateForm";
import SideCatTags from "../reusables/forms/side-cat-tags";
import React from "react";
import Alert from "../messages/Alert";
import {useEffect, useState} from "react";
import {dataFromLocalStorage, setDataToLocalStorage} from "../reusables/functions/dataFromLocalStorage";
import useSWR from "swr";
import axiosInstance, {fetcher} from "../axios/axios";
import {createService} from "../../actions/service";
import {getCookie} from "../../actions/auth";

const token = getCookie('token');

const PageCreate = () => {
    const [checked, setChecked] = useState([]); // categories
    const [body, setBody] = useState(dataFromLocalStorage('pages'));
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        loading: false,
        formData: {},
        title: '',
        hidePublishButton: false
    });

    const {data: categories, error: catError, mutate} = useSWR({url: `/service-categories`, method: 'get'}, fetcher);
    const {error, sizeError, success, formData, title, loading} = values;


    useEffect(() => {
        setValues({
            ...values,
            formData: new FormData(), // <-- valid formData object after initial render
        });

    }, [],)


    const publish = e => {
        e.preventDefault();
        setValues({...values, loading: true});
        createService(formData, token)
            .then(data => {
                    if (data.error) {
                        setValues({...values, error: data.error, loading: false});
                    } else {
                        setValues({
                            ...values,
                            title: '',
                            error: '',
                            success: `A new item titled "${data.title}" is created`,
                            loading: false
                        });
                        setBody('');
                    }
                }
            )

    };

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({...values, [name]: value, formData, error: ''});
    };


    const handleBody = e => {
        setBody(e);
        formData.set('body', e);
        setDataToLocalStorage('page', e)
    };


    const handleToggle = c => () => {
        setValues({...values, error: ''});
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        setChecked(all);
        formData.set('categories', all);
    };


    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (
                <label key={i} className="list-group-item border-0">
                    <input onChange={handleToggle(c._id)} type="checkbox" className="form-check-input me-1"/>
                    {c.name}
                </label>
            ))
        );
    };


    return (
        <div className='row'>
            <div className="col-md-8">
                <CreateForm
                    handleChange={handleChange}
                    handleBody={handleBody}
                    bodyValue={body}
                    btnCapture={loading ? <>
                        <span className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"/> Publishing...</> : 'Create'}
                    titleValue={title}
                    onSubmit={publish}/>
                <div className="mb-3">
                    <br/>
                    <Alert msg={error} type="danger" label="Danger"/>
                    <Alert msg={success} label='Success' type='success'/>
                </div>
            </div>
            <div className="col-md-4">
                <SideCatTags
                    categories={showCategories}
                    handleChange={handleChange}/>
            </div>
        </div>
    );
};

export default PageCreate;