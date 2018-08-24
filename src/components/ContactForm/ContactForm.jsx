import React from 'react';
import './ContactForm.css';
import * as emailjs from 'emailjs-com';
import ButtonLink from '../../components/ButtonLink';

export default class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.changedInput = '';
        this.state = {
            formFields: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            },
            formFieldsValidity: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            },
            formValidity: '',
            formDisplayed: true,
            submitting: false
        };
    }

    onReset() {
        this.setState({
            formFields: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            },
            formFieldsValidity: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            },
            formValidity: '',
            formDisplayed: true,
            submitting: false
        });
    }

    inputChanged(e) {
        if (!this.state.submitting) {
            this.changedInput = e.target;
            this.setState(prev =>
                ({
                    formFields: {
                        ...prev.formFields,
                        [this.changedInput.name]: this.changedInput.value
                    }
                }), this.validateField(this.changedInput));
        }
    }

    validateField({ name, value }) {
        let { firstname, lastname, email, phone, subject, message } = this.state.formFieldsValidity;

        switch (name) {
            case 'firstname':
                firstname = value.match(/^([\w-]+)$/i) && true;
                break;
            case 'lastname':
                lastname = value.match(/^([\w-]+)$/i) && true;
                break;
            case 'email':
                email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && true;
                break;
            case 'phone':
                phone = value.match(/^([\d-]{5,})$/i) && true;
                break;
            case 'subject':
                subject = (value.length >= 1) && true;
                break;
            case 'message':
                message = (value.length >= 1) && true;
                break;
            default:
                break;
        }
        this.setState({
            formFieldsValidity: {
                firstname,
                lastname,
                email,
                phone,
                subject,
                message
            }
        });
    }


    hasError(name) {
        if (this.state.formFieldsValidity[name] || this.state.formFieldsValidity[name] === "")
            return '';
        else
            return 'has-error';
    }

    onSubmit(e) {
        if (this.validateForm()) {
            this.setState({ submitting: true });
            console.log(e.target);
            console.log(e.target.form);
            e.target.innerHTML = "Sending...";
            this.sendMail();
        }
    }

    validateForm() {
        let { firstname, lastname, email, phone, subject, message } = this.state.formFieldsValidity;
        for (let x in this.state.formFieldsValidity){
            if (this.state.formFieldsValidity.hasOwnProperty(x)){
                if (this.state.formFieldsValidity[x]===""){
                    this.setState(prev =>
                        ({
                            formFieldsValidity: {
                                ...prev.formFieldsValidity,
                                [x]: null
                            }
                        }));
                }
            }
        }
        if (firstname && lastname && email && phone && subject && message){
            this.setState({formValidity: true});
            return true;
        }
        else {
            this.setState({formValidity: false});
            return false;
        }
    }

    

    sendMail() {
        var template_params = this.state.formFields;

        var service_id = "default_service";
        var template_id = "contact_samsonmaconi";
        emailjs.send(service_id, template_id, template_params, 'user_kxdFIlAoG71bkquHETjE5')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.setState({
                    formDisplayed: false,
                    submitting: false
                });
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    render() {
        return (
            <div className="ContactForm my-5 row no-gutters mx-lg-5 px-lg-5 ">
                <div className={`col ${this.state.formDisplayed ? "" : "d-none"} form`}>
                    <form name="form1" id="form1" ref={this.formRef} action="">
                        <div className="row justify-center align-center">
                            <div className="col-12">
                                <label htmlFor="firstname">Full Name <small>*</small></label>
                            </div>
                            <div className="col-12 col-md-6 mb-1">
                                <div className={`col-12 mb-1 p-0 text-left ${this.state.formFieldsValidity.firstname || this.state.formFieldsValidity.firstname==='' ? 'd-none' : ''}`}>
                                    <span name="formError" id="formError"><small>+</small> Valid First Name required. </span>
                                </div>
                                <input className={`form-control ${this.hasError('firstname')}`} type="text" name="firstname" id="firstname" placeholder="First Name" autoComplete='given-name' value={this.state.formFields.firstname} onChange={this.inputChanged.bind(this)} />
                            </div>
                            <div className="col-12 col-md-6 mb-1">
                                <div className={`col-12 mb-1 p-0 text-left ${this.state.formFieldsValidity.lastname || this.state.formFieldsValidity.lastname==='' ? 'd-none' : ''}`}>
                                    <span name="formError" id="formError"><small>+</small> Valid Last Name required. </span>
                                </div>
                                <input className={`form-control ${this.hasError('lastname')}`} type="text" name="lastname" id="lastname" placeholder="Last Name" autoComplete='family-name' value={this.state.formFields.lastname} onChange={this.inputChanged.bind(this)} />
                            </div>
                            <div className="col-12 mt-3">
                                <label htmlFor="email">Contact <small>*</small></label>
                            </div>
                            <div className="col-12 col-md-6 mb-1">
                                <div className={`col-12 mb-1 p-0 text-left ${this.state.formFieldsValidity.email || this.state.formFieldsValidity.email==='' ? 'd-none' : ''}`}>
                                    <span name="formError" id="formError"><small>+</small> Valid Email address required. </span>
                                </div>
                                <input className={`form-control ${this.hasError('email')}`} type="email" name="email" id="email" placeholder="Email" autoComplete='email' value={this.state.formFields.email} onChange={this.inputChanged.bind(this)} />
                            </div>
                            <div className="col-12 col-md-6 mb-1">
                                <div className={`col-12 mb-1 p-0 text-left ${this.state.formFieldsValidity.phone || this.state.formFieldsValidity.phone==='' ? 'd-none' : ''}`}>
                                    <span name="formError" id="formError"><small>+</small> Phone Number required. </span>
                                </div>
                                <input className={`form-control ${this.hasError('phone')}`} type="tel" name="phone" id="phone" placeholder="Phone Number" autoComplete='tel-national' value={this.state.formFields.phone} onChange={this.inputChanged.bind(this)} />
                            </div>
                            <div className="col-12 mt-3">
                                <label htmlFor="subject">Message <small>*</small></label>
                            </div>
                            <div className="col-12 mb-1">
                                <div className={`col-12 mb-1 p-0 text-left ${this.state.formFieldsValidity.subject || this.state.formFieldsValidity.subject==='' ? 'd-none' : ''}`}>
                                    <span name="formError" id="formError"><small>+</small> Message Subject required.</span>
                                </div>
                                <input className={`subject form-control ${this.hasError('subject')}`} type="text" name="subject" id="subject" placeholder="Subject" value={this.state.formFields.subject} onChange={this.inputChanged.bind(this)} />
                            </div>
                            <div className="col-12 mb-1">
                                <div className={`col-12 mb-1 p-0 text-left ${this.state.formFieldsValidity.message || this.state.formFieldsValidity.message==='' ? 'd-none' : ''}`}>
                                    <span name="formError" id="formError"><small>+</small> Your Message is required. </span>
                                </div>
                                <textarea className={`form-control ${this.hasError('message')}`} name="message" id="message" cols="30" rows="10" placeholder="What's on your mind?" value={this.state.formFields.message} onChange={this.inputChanged.bind(this)}></textarea>
                            </div>
                            <div className="col-12 mb-1 text-center">
                                <span className={`${this.state.formValidity || this.state.formValidity==='' ? 'd-none' : ''}`} name="formError" id="formError">+ There are errors in this form. Kindly review. </span>
                            </div>
                            <div className="col-6 text-center mb-1">
                                <ButtonLink disabled={this.state.submitting} label="Send" type="button" onClick={this.onSubmit.bind(this)} className="dark" />
                            </div>
                            <div className="col-6 text-center mb-1">
                                <ButtonLink disabled={this.state.submitting} label="Reset" type="button" onClick={this.onReset.bind(this)} className="dark" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className={`col ${this.state.formDisplayed ? "d-none" : ""} align-self-center`}>
                    <div className="row">
                        <div className="col align-self-center">
                            <h2 className="display-4 text-center">Sent!<br /><span className="thankyou themecolor4">Thank You {this.state.formFields.firstname}</span></h2>
                            <p className="text-center">I'll get back to you within 48 hours</p>
                        </div>
                        <div className="col align-self-center">
                            <img alt="QR" className="img-fluid align-self-center" src="img/qr_code.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}