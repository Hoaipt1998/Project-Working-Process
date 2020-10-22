import React, { useState } from 'react';
import '../styles/bt8-2.scss';
//import '../styles/reset.scss';
import register from '../services/Register';

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: ''
    });

    const { name, password, email } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const result = await register({ name, email, password });
        alert(result);
    };

    return (
        <div>
            <main className="flex">
                <div className="content">
                    <div className="main-content">
                        <h5>SAY HELLO</h5>
                        <h3>CREATE ACCOUNT</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est natus <br /> facere aperiam! Tenetur maiores dolore a quod pariatur ut voluptates <br /> quae saepe ea quasi laudantium, iste molestias inventore fuga <br /> assumenda.</p>

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
                            <p>© 2019 Invent Signup. All rights reserved | Design by</p>
                            <a href="http://w3layouts.com/" target="_blank">W3layouts</a>
                        </div>
                    </form>
                </div>
            </main>
            <footer />
        </div>
    );
};

export default Register;