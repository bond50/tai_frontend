import {useState} from 'react';

import Router, {withRouter} from 'next/router';
import {resetPassword} from '../../../../actions/auth';
import Link from "next/link";

const ResetPassword = ({router}) => {
    const [values, setValues] = useState({
        name: '',
        newPassword: '',
        error: '',
        message: '',
        showForm: true
    });

    const {newPassword, error, message} = values;

    const handleSubmit = e => {
        e.preventDefault();
        resetPassword({
            newPassword,
            resetPasswordLink: router.query.id
        }).then(data => {
            if (data.error) {
                setValues({...values, error: data.error, showForm: false, newPassword: ''});
            } else {
                setValues({...values, message: data.message, showForm: false, newPassword: '', error: ''});

                setTimeout(() => {
                    Router.push('/signin')
                }, 5000);

            }
        });
    };

    const passwordResetForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group pt-5">
                <input
                    type="password"
                    onChange={e => setValues({...values, newPassword: e.target.value})}
                    className="form-control mb-3"
                    value={newPassword}
                    placeholder="Type new password"
                    required
                />
            </div>
            <div>
                <button className="btn btn-primary">Change password</button>
            </div>
        </form>
    );

    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-success">{message}</div> : '');

    return (

        <div className="container">
            <h2>Reset password</h2>
            <hr/>
            {showError()}
            {showMessage()}
            {passwordResetForm()}
            <Link href={`/signin`}>
                <a className='btn btn-danger btn-sm mt-2'>Click to login</a>
            </Link>
        </div>
    );
};

export default withRouter(ResetPassword);