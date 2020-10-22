import React, { useState } from 'react';
import login from '../services/Login';
import { setUser, getUser } from '../utils/cookie';
import { Redirect } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  if (getUser()) {
    return <Redirect to="/" />
  }

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await login({ email, password });
    setUser(result);
  };
  return (
    <div>
      <h1 className="row justify-content-md-center">Login</h1>
      <main className="row justify-content-center align-content-center ">
        <form className="  border w-25 p-5 " onSubmit={e => onSubmit(e)}>
          <div className="flex justify-content-between mb-4">
            <label className="" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={email} onChange={e => onChange(e)} />
          </div>
          <div className="flex justify-content-between">
            <label className="" htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={password} onChange={e => onChange(e)} />
          </div>
          <div className=" row justify-content-md-center pt-5 primary"   >
            <button className=" btn btn-primary" width={200}>Login</button>
          </div>
        </form>

      </main>

    </div>
  );
}

export default Login;
