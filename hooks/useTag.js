import React, {useEffect, useState} from 'react';
import {getCookie} from "../actions/auth";
import {create, getTags, removeTag} from "../actions/tag";
import TagCatButton from "../components/reusables/tag-cat-button";


const useTag = (fetchAllEndpoint, singleEndpoint, formLabel) => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        tags: [],
        removed: false,
        reload: false
    });

    const {name, error, success, tags, removed, reload} = values;
    const token = getCookie('token');

    useEffect(() => {
        loadTags();
    }, [reload, fetchAllEndpoint, singleEndpoint]);

    const loadTags = () => {
        getTags(fetchAllEndpoint).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({...values, tags: data});
            }
        });
    };

    const showTags = () => {
        return tags.map(tag => {
            return <TagCatButton key={tag._id} name={tag.name} doubleClicked={() => deleteConfirm(tag.slug)}/>
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this tag?');
        if (answer) {
            deleteTag(slug);
        }
    };

    const deleteTag = slug => {
        removeTag(slug, token, singleEndpoint).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({...values, error: false, success: false, name: '', removed: !removed, reload: !reload});
            }
        });
    };

    const clickSubmit = e => {
        e.preventDefault();
        create({name}, token, singleEndpoint).then(data => {
            if (data.error) {
                setValues({...values, error: data.error, success: false});
            } else {
                setValues({...values, error: false, success: true, name: '', reload: !reload});
            }
        });
    };
    const handleChange = e => {
        setValues({...values, name: e.target.value, error: false, success: false, removed: false});
    };

    const showSuccess = () => {
        if (success) {
            return <p className="text-success">Tag is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p className="text-danger">Tag already exist</p>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <p className="text-danger">Tag is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({...values, error: false, success: false, removed: false});
    };


    return {
        name,
        handleChange,
        formLabel,
        clickSubmit,
        mouseMoveHandler,
        showTags,
        showRemoved,
        showSuccess,
        showError
    }
};

export default useTag