import React, {useState} from 'react';
import classes from "../profile/overview.module.css";
import Button from "../reusables/ui/Button";
import {preSignup} from "../../actions/auth";
import Alert from "../messages/Alert";


const SuperSignupForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password1: '',
        role: 0,
        error: null,
        loading: false,
        message: '',
        showForm: true
    });

    const {
        name,
        email,
        role,
        password,
        password1,
        error,
        loading,
        message,
    } = values;


    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values, loading: true, error: ''});
        const user = {
            name: name,
            email: email,
            password: password,
            password1: password1,
            role: role,
        };


        preSignup(user)
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error, loading: false});
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        role: 0,
                        password: '',
                        password1: '',
                        photo: null,
                        error: '',
                        loading: false,
                        message: data.message,
                        showForm: false
                    });
                }
            });
    };

    const handleChange = name => e => {
        let value
        if (name === 'role') {
            value = role === 0 ? 1 : 0;
        } else {
            value = e.target.value;
        }
        setValues({...values, error: '', [name]: value});
    };

    function showForm() {
        return <form onSubmit={handleSubmit}>
            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Full Name</div>
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
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}> Email Address</div>
                <div className="col-lg-9 col-md-8">
                    <input
                        type="email"
                        value={email}
                        name='email'
                        onChange={handleChange('email')}
                        className="form-control"/>
                </div>
            </div>
            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}> Password</div>
                <div className="col-lg-9 col-md-8">
                    <input
                        type="password"
                        value={password}
                        name='password'
                        onChange={handleChange('password')}
                        className="form-control"/>
                </div>
            </div>
            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}> Repeat password</div>
                <div className="col-lg-9 col-md-8">
                    <input
                        type="password"
                        value={password1}
                        name='password1'
                        onChange={handleChange('password1')}
                        className="form-control"/>
                </div>
            </div>
            <div className={`row ${classes.Row} mb-3`}>
                <div className={`col-lg-3 col-md-4 ${classes.Label}`}>Make the user admin</div>
                <div className="col-lg-9 col-md-8">
                    <input
                        type="checkbox"
                        value={role}
                        name="role"
                        checked={role !== 0}
                        onChange={handleChange('role')}/>
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

export default SuperSignupForm;