import React, { useState } from 'react';
import '../styles/bt8-2.scss';
//import '../styles/reset.scss';
import register from '../services/Register';
import { setUserRegistered, getUser } from '../utils/cookie';
import { Redirect, withRouter } from 'react-router-dom';

const Register = ({ history }) => {

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: ''
    });

    if (getUser()) {
        return <Redirect to="/" />
    }

    const { name, password, email } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const result = await register({ name, email, password });

        setUserRegistered(result);
        history.goBack();
    };

    return (
        <div>
            <main className="flex">
                <div className="content">
                    <div className="main-content">
                        <h5>SAY HELLO</h5>
                        <h3>CREATE ACCOUNT</h3>
                        <p>The Best Choices For You!!</p>

                    </div>
                </div>
                <div className="create-acc">
                    <form onSubmit={e => onSubmit(e)}>
                        <h3>Join Us</h3>
                        <h4>Create Your  Account, It's Free.</h4>
                        <div className="main-field">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text"
                                name="name"
                                value={name}
                                onChange={e => onChange(e)} />
                        </div>
                        <div className="main-field">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email"
                                value={email}
                                name="email"
                                onChange={(e) => onChange(e)} />
                        </div>
                        <div className="main-field">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password"
                                value={password}
                                name="password"
                                onChange={(e) => onChange(e)} />
                        </div>
                        <div className="conditions">
                            <input id="check" type="checkbox" />
                            <label htmlFor="check">I agree to <a href>Conditions</a> of Use and <a href>Privacy</a></label>
                        </div>
                        <div className="button">
                            <button>Create Account</button>
                        </div>
                        <div className="copy-right text-center">
                            <p>© 2020 Invent Signup. All rights reserved</p>
                            <a href="http://w3layouts.com/" target="_blank">Design by:Dat Nguyen</a>
                        </div>
                    </form>
                </div>
            </main>
            <footer />
        </div>
    );
};

export default withRouter(Register);