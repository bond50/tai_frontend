/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {API} from "../../config";
import {getCookie, updateUser,} from "../../actions/auth";
import {getProfile, update} from "../../actions/user";
import Image from "next/image";
import classes from "../../styles/Userprofile.module.css";
import {Tab, Tabs} from "react-bootstrap";
import Overview from "../../components/profile/overview";
import Profile from "../../components/profile/profile";
import Link from "next/link";
import ForgotPassword from "../../pages/auth/password/forgot";
import Alert from "../messages/Alert";

const UserUpdateComponent = ({id}) => {
    const [key, setKey] = useState('overview');
    const [values, setValues] = useState({
        username: '',
        username_for_photo: '',
        name: '',
        about: '',
        password: '',
        error: '',
        success: false,
        loading: false,
        photo: '',
        email: '',
        twitter: '',
        facebook: '',
        instagram: '',
        reload: false,
        loadedId: '',
        photoDimensions: null,
        userData: process.browser && new FormData()
    });
    const [role, setRole] = useState(0)

    const token = getCookie('token');
    const {
        username,
        username_for_photo,
        name,
        about,
        password,
        address,
        companyRole,
        error,
        success,
        email,
        loading,
        twitter,
        facebook,
        instagram,
        loadedId,
        reload,
        hospitalRole,
        photoDimensions,
        userData
    } = values;

    const init = () => {
        getProfile(token, id)
            .then(res => {
                setValues({
                    ...values,
                    username: res.username,
                    username_for_photo: res.username,
                    name: res.name,
                    email: res.email,
                    about: res.about,
                    role: res.role,
                    companyRole: res.companyRole,
                    loadedId: res._id,
                    address: res.address,
                    twitter: res.twitter,
                    facebook: res.facebook,
                    instagram: res.instagram,
                    photoDimensions: res.photoDimensions
                });
                setRole(res.role)
            });
    };


    useEffect(() => {
        setValues({...values, userData: new FormData()});
        init();

    }, [id, reload]);


    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        userData.set(name, value);
        setValues({...values, [name]: value, userData, error: false, success: false});
    };


    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values, error: '', loading: true, success: false});
        userData.append("role", role);
        update(token, userData, loadedId).then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading: false});
            } else {
                updateUser(data, loadedId, () => {
                    setValues({
                        ...values,
                        username: data.username,
                        name: data.name,
                        email: data.email,
                        about: data.about,
                        address: data.address,
                        twitter: data.twitter,
                        facebook: data.facebook,
                        instagram: data.instagram,
                        password: '',
                        success: true,
                        companyRole: data.companyRole,
                        loading: false,
                        reload: !reload
                    });

                })

            }
        });

    };

    let btnText = 'Save changes'
    if (loading) {
        btnText = <><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/> loading...</>
    }

    const showSuccessMessage = () => success && <div>
        <Alert msg="Profile Updated " label='Success' type='success'/>
    </div>


    const showErrorMessage = () => (
        <Alert msg={error} type="danger" label="Danger"/>
    );

    function handleCheckBox(e) {
        const value = e.target.checked;
        userData.set('hmt', value);
        setValues({...values, hmt: value, userData, error: false, success: false});

    }

    const toggleTole = () => {
        setRole(prev => {
            if (prev === 0) {
                return 1;
            }
            if (prev === 1) {
                return 0;
            }
        });


    }


    const imgSrc = `${API}/user/photo/${username_for_photo}`


    return (

        <section>
            <div className="row mx-0">
                <div className="col-xl-4">
                    <div className={`card ${classes.Card} `}>
                        {
                            photoDimensions && username_for_photo && <Image
                                width={photoDimensions.width}
                                height={photoDimensions.height}
                                src={imgSrc}
                                layout='responsive'
                                className="img-fluid"
                                alt="user profile"
                            />
                        }
                        <div
                            className={`card-body ${classes.CardBody} pt-4 d-flex flex-column align-items-center`}>
                            <h2>{name}</h2>

                            <h3>{companyRole ? companyRole : "companyRole not defined"}</h3>
                            <div className={`${classes.Links} mt-2`}>
                                {twitter &&
                                <Link href={twitter}>
                                    <a className="twitter"><i className="bi bi-twitter"/></a>
                                </Link>
                                }
                                {
                                    facebook &&
                                    <Link href={facebook}>
                                        <a className="facebook"><i className="bi bi-facebook"/></a>
                                    </Link>

                                }
                                {
                                    instagram &&
                                    <Link href={instagram}>
                                        <a className="instagram"><i
                                            className="bi bi-instagram"/>
                                        </a>
                                    </Link>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className={`card ${classes.Card}`}>
                        <div className={`card-body ${classes.CardBody}`}>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="overview" title="Overview">
                                    <Overview
                                        name={name}
                                        address={address}
                                        username={username}
                                        about={about}
                                        photoDimensions={photoDimensions}
                                        hospitalRole={hospitalRole}/>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <Profile
                                        handleCheckBox={handleCheckBox}
                                        username_for_photo={username_for_photo}
                                        username={username}
                                        about={about}
                                        name={name}
                                        email={email}
                                        successMsg={showSuccessMessage}
                                        password={password}
                                        role={role}
                                        toggleRole={toggleTole}
                                        loading={loading}
                                        companyRole={companyRole}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                        errorMsg={showErrorMessage}
                                        btnText={btnText}
                                        instagram={instagram}
                                        twitter={twitter}
                                        facebook={facebook}
                                        address={address}
                                    />
                                </Tab>
                                <Tab eventKey="password" title="Change Password">
                                    <div className={classes.Password}>
                                        <div className={`row ${classes.Row} mb-3`}>
                                            <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Password Reset</div>
                                            <div className="col-lg-9 col-md-8">
                                                <ForgotPassword/>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default UserUpdateComponent;