
import React, {useEffect, useState} from 'react';
import SideCatTags from "../reusables/forms/side-cat-tags";
import Image from "next/image";
import {API} from "../../config";
import Router, {useRouter} from "next/router";
import CreateForm from "../reusables/forms/CreateForm";
import {getCookie, isAuth} from "../../actions/auth";
import {singlePage, updatePage} from "../../actions/service";
import {getCategories} from "../../actions/category";
import Alert from "../messages/Alert";


const Page = () => {
    const [body, setBody] = useState('');
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]); // categories
    const [isAccepted, setIsAccepted] = useState(false); // switch
    const [isFeatured, setIsFeatured] = useState(false); // switch



    const [values, setValues] = useState({
        title: '',
        error: '',
        icon:'',
        success: '',
        formData: process.browser && new FormData(),
        loading: false
    });

    const {error, success,loading,icon, formData, title} = values;
    const token = getCookie('token');
    const router = useRouter()

    useEffect(() => {
        setValues({...values, formData: new FormData()});
        initPage();
        initCategories();
        setValues({...values, formData: new FormData()});
    }, [router]);


    const initPage = () => {
        if (router.query.slug) {
            singlePage(router.query.slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({...values, title: data.title,icon:data.icon});
                    setBody(data.body);
                    setCategoriesArray(data.categories);
                    setIsAccepted(data.accepted)
                    setIsFeatured(data.featured)
                }
            });
        }
    };


    const setCategoriesArray = pageCategories => {
        let ca = [];
        pageCategories.map((c) => {
            ca.push(c._id);
        });
        setChecked(ca);
    };


    const initCategories = () => {
        getCategories('service-categories').then(data => {
            if (data.error) {
                setValues({...values, error: data.error});
            } else {
                setCategories(data);
            }
        });
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

    const findOutCategory = c => {
        const result = checked.indexOf(c);
        return result !== -1;
    };


    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (

                <label key={i} className="list-group-item border-0">
                    <input onChange={handleToggle(c._id)} checked={findOutCategory(c._id)} type="checkbox"
                           className="form-check-input me-1"/>
                    {c.name}
                </label>

            ))
        );
    };


    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({...values, [name]: value, formData, error: ''});
    };

    const handleBody = e => {
        setBody(e);
        formData.set('body', e);
    };


    const editBlog = e => {
        e.preventDefault();
        setValues({...values, loading: true});
        updatePage(formData, token, router.query.slug)
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error,loading: false});
                } else {
                    setValues({...values, title: '', success: `Item titled "${data.title}" is successfully updated`, loading: false});
                    if (isAuth() && isAuth().role === 1) {
                        Router.replace(`/admin/crud/${router.query.slug}`).then(r => console.log(r));
                        // Router.replace(`/admin`).then(r => (console.log(r)));
                    } else if (isAuth() && isAuth().role === 0) {
                        // Router.replace(`/user/crud/gen-page/${router.query.slug}`).then(r => console.log(r));
                        Router.replace(`/user`).then(r => (console.log(r)));
                    }
                }
            });
    };


    const onSwitchToggle = e => {
        setIsAccepted(!isAccepted)
        formData.set('accepted', e.target.checked);
    };

    const onSwitchFeaturedToggle = e => {
        setIsFeatured(!isFeatured)
        formData.set('featured', e.target.checked);
    };


    return (
        <div className='row'>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Update <span>| {router.query.slug}</span></h5>
                        {isAuth() && isAuth().role === 1 && <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={isAccepted}
                                onChange={onSwitchToggle}
                                id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Accept </label>
                        </div>
                        }
                        {isAccepted && isAuth() && isAuth().role === 0 &&
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Accepted <i
                            className="bi bi-check2-circle text-success "/>
                        </label>
                        }
                        <br/>
                        {isAuth() && isAuth().role === 0 && !isAccepted &&
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Accepted <i
                            className="bi bi-x-circle-fill text-danger "/>
                        </label>
                        }

                        {isAuth() && isAuth().role === 1 && <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={isFeatured}
                                onChange={onSwitchFeaturedToggle}
                                id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Is Featured </label>
                        </div>}
                        {isAuth() && isAuth().role === 0 && isFeatured &&
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Featured <i
                            className="bi bi-check2-circle text-success "/>
                        </label>
                        }

                        <br/>
                        {isAuth() && isAuth().role === 0 && !isFeatured &&
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Featured <i
                            className="bi bi-x-circle-fill text-danger "/>
                        </label>
                        }
                    </div>
                </div>

                <CreateForm
                    handleChange={handleChange}
                    iconValue={icon}
                    updating
                    handleBody={handleBody}
                    bodyValue={body}
                     btnCapture={loading ? <>
                        <span className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"/> Publishing...</> : 'Update'}
                    titleValue={title}
                    onSubmit={editBlog}/>
                <div className="mb-3">
                    <br/>
                    <Alert msg={error} type="danger" label="Danger"/>
                    <Alert msg={success} label='Success' type='success'/>
                </div>
                {body && (
                    <Image src={`${API}/general/photo/${router.query.slug}`} alt={title} width={800} height={500}/>
                )}
            </div>
            <div className="col-md-4">
                <SideCatTags
                    categories={showCategories}
                    handleChange={handleChange}/>
            </div>
        </div>


    );
};

export default Page;