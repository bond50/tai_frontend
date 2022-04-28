/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {API} from "../../config";
import {getCookie} from "../../actions/auth";
import Image from "next/image";
import classes from "../../styles/Userprofile.module.css";
import Link from "next/link";
import Alert from "../messages/Alert";
import {getTeamMember, update} from "../../actions/team";
import {Tab, Tabs} from "react-bootstrap";
import Overview from "../profile/overview";
import Profile from "../profile/profile";
import ForgotPassword from "../../pages/auth/password/forgot";


const MemberUpdateComponent = ({id}) => {
    const [key, setKey] = useState('overview');
    const [values, setValues] = useState({
        username_for_photo: '',
        username: '',
        name: '',
        about: '',
        error: '',
        success: false,
        loading: false,
        photo: '',
        email: '',
        twitter: '',
        facebook: '',
        instagram: '',
        linkedIn: '',
        reload: false,
        loadedId: '',
        photoDimensions: null,
        userData: typeof window !== "undefined" && new FormData()

    });


    const token = getCookie('token');
    const {
        username_for_photo,
        username,
        name,
        about,
        address,
        companyRole,
        error,
        success,
        email,
        loading,
        twitter,
        facebook,
        instagram,
        linkedIn,
        loadedId,
        reload,
        hospitalRole,
        photoDimensions,
        userData
    } = values;


    useEffect(() => {
        setValues({...values, userData: new FormData()});
        getTeamMember(token, id)
            .then(res => {
                setValues({
                    ...values,
                    username: res.username,
                    username_for_photo: res.username,
                    name: res.name,
                    email: res.email,
                    about: res.about,
                    companyRole: res.companyRole,
                    loadedId: res._id,
                    address: res.address,
                    twitter: res.twitter,
                    linkedIn: res.linkedIn,
                    facebook: res.facebook,
                    instagram: res.instagram,
                    photoDimensions: res.photoDimensions
                });
            });


    }, [id, reload]);


    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        userData.set(name, value);
        setValues({...values, [name]: value, userData, error: false, success: false});
    };


    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values, error: '', loading: true, success: false});
        update(token, userData, loadedId).then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading: false});
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about,
                    address: data.address,
                    twitter: data.twitter,
                    facebook: data.facebook,
                    linkedIn: data.linkedIn,
                    instagram: data.instagram,
                    success: true,
                    companyRole: data.companyRole,
                    loading: false,
                    reload: !reload
                });

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
                                        companyRole={companyRole}
                                        about={about}
                                        instagram={instagram}
                                        facebook={facebook}
                                        linkedIn={linkedIn}
                                        twitter={twitter}
                                        photoDimensions={photoDimensions}
                                        hospitalRole={hospitalRole}/>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <Profile
                                        username_for_photo={username_for_photo}
                                        username={username}
                                        about={about}
                                        name={name}
                                        email={email}
                                        successMsg={showSuccessMessage}
                                        loading={loading}
                                        companyRole={companyRole}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                        errorMsg={showErrorMessage}
                                        btnText={btnText}
                                        instagram={instagram}
                                        linkedIn={linkedIn}
                                        twitter={twitter}
                                        facebook={facebook}
                                        address={address}
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MemberUpdateComponent;