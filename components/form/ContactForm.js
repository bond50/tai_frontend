import React, {useState} from 'react';
import {emailContactForm} from '../../actions/form';
import Alert from "../messages/Alert";


const ContactForm = ({authorEmail, label}) => {
    const [values, setValues] = useState({
        message: '',
        name: '',
        subject: '',
        email: '',
        loading: false,
        showForm: true,
        sent: false,
        buttonText: 'Send Message',
        success: false,
        error: false
    });
    const {message, name, email, subject, loading, success, error} = values;

    const clickSubmit = e => {
        e.preventDefault();
        setValues({...values, loading: true});
        emailContactForm({authorEmail, name, subject, email, message}).then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading: false});
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: '',
                    loading: false,
                    showForm: false,
                    email: '',
                    subject: '',
                    message: '',
                    buttonText: 'Sent',
                    success: data.success
                });
            }
        });
    };


    let btnText = 'Send Message'
    if (loading) {
        btnText = <><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/> Sending...</>
    }


    const handleChange = name => e => {
        setValues({...values, [name]: e.target.value, error: false, success: false, buttonText: 'Send Message'});
    };

    const showSuccessMessage = () => success && <div>
        <br/>
        <Alert msg="Your Message has been Sent.Thank you" label='Success' type='success'/>
    </div>


    const showErrorMessage = () => (
        <Alert msg={error} type="danger" label="Danger"/>
    );

    const sideData = () => {
        return <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="info">
                <div className="address">
                    <i className="bi bi-geo-alt"/>
                    <h4>Location:</h4>
                    <p>Off Nkrumah Road, Third Floor, Taiyebi House, opposite NSSF Building.</p>
                </div>

                <div className="email">
                    <i className="bi bi-envelope"/>
                    <h4>Email:</h4>
                    <p>info@tailifestyle.co.ke</p>
                </div>

                <div className="phone">
                    <i className="bi bi-phone"/>
                    <h4>Call:</h4>
                    <p>+254 702356422 <br/>+254 723422747</p>
                </div>

                <iframe
                    src="https://maps.google.com/maps?q=Taiyebi%20House,%20Nkurumah%20Rd,%20Mombasa&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" style={{border: "0", width: "100%", height: "290px"}} allowFullScreen/>
            </div>

        </div>
    }

    const contactForm = () =>
        <form onSubmit={clickSubmit} className="email-form">
            {label && <label className="form-label">{label}</label>}
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                        placeholder="Your Name"
                        type="text"
                        onChange={handleChange('name')}
                        className="form-control"
                        value={name}
                        required/>
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="name">Your Email</label>
                    <input
                        placeholder="Your Email"
                        type="email"
                        onChange={handleChange('email')}
                        className="form-control"
                        value={email}
                        required
                    />
                </div>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="name">Subject</label>
                <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={handleChange('subject')}
                    placeholder="Subject"
                    required/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="name">Message</label>
                <textarea
                    onChange={handleChange('message')}
                    className="form-control"
                    value={message}
                    name="message"
                    rows={authorEmail ? '4' : '14'} required/>
            </div>
            {showSuccessMessage()}
            {showErrorMessage()}
            <div className="text-center mt-3">
                <button type="submit">{btnText}</button>
            </div>
        </form>


    if (authorEmail) {
        return <div className="contact">
            {contactForm()}
        </div>
    }

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    {sideData()}
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up"
                         data-aos-delay="200">
                        <div className={'col-lg-10'}>
                            {contactForm()}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactForm;