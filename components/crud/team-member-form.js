import React, {useState} from 'react';
import classes from "../profile/overview.module.css";
import Button from "../reusables/ui/Button";
import Alert from "../messages/Alert";
import {create} from "../../actions/team";


const TeamMember = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        about: '',
        companyRole: '',
        photoPreview: '',
        error: null,
        loading: false,
        message: '',
        showForm: true
    });

    const {
        name,
        email,
        about,
        companyRole,
        error,
        loading,
        message,
    } = values;


    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values, loading: true, error: ''});
        const user = {
            name,
            email,
            about,
            companyRole
        };


        create(user)
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error, loading: false});
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        companyRole: '',
                        about: '',
                        error: null,
                        photoPreview: '',
                        loading: false,
                        message: data.message,
                        showForm: false
                    });
                }
            });
    };

    const handleChange = name => e => {
        setValues({...values, error: '', [name]: e.target.value});
    };

    function showForm() {
        return <form onSubmit={handleSubmit}>
            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Full Names</div>
                <div className="col-lg-9 col-md-8">
                    <input
                        type="text"
                        value={name}
                        name='name'
                        onChange={handleChange('name')}
                        className="form-control"/>
                </div>
            </div>

            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}> Email Address if any</div>
                <div className="col-lg-9 col-md-8">
                    <label className='text-muted fst-italic'>Email address cannot be shared but user can receive
                        messages from
                        clients </label>
                    <input
                        type="email"
                        value={email}
                        name='email'
                        placeholder=''
                        onChange={handleChange('email')}
                        className="form-control"/>
                </div>
            </div>

            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}> About {name}</div>
                <div className="col-lg-9 col-md-8">
                    <input
                        type="text"
                        value={about}
                        name='about'
                        placeholder={`Enter information about ${name}`}
                        onChange={handleChange('about')}
                        className="form-control"/>
                </div>
            </div>
            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}> {`Company role`}</div>
                <div className="col-lg-9 col-md-8">
                    <input
                        type="text"
                        value={companyRole}
                        placeholder={`eg Manager`}
                        name='companyRole'
                        onChange={handleChange('companyRole')}
                        className="form-control"/>
                </div>
            </div>

            {showMessage()}
            {showError()}
            <div className="text-center">
                <Button
                    customClass={classes.Btn}
                    type='submit'
                    btnCapture={showLoading()}
                    loading={false}/>
            </div>
        </form>

    }

    const showLoading = () => (loading ? "Loading..." : 'Submit');
    const showError = () => (error ? <Alert msg={error} type='danger' label='Danger'/> : '');
    const showMessage = () => (message ? <Alert msg={message} type='success' label='Success'/> : '');
    return (
        <>
            {showForm()}
        </>

    );
};

export default TeamMember;