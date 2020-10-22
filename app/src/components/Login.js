import React, { useState } from 'react';
import login from '../services/Login';
function Login() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await login({ email, password });
    alert(result);
  };
  return (
    <div className="" style={{  
      backgroundImage: "url(" + "https://demo.w3layouts.com/demos_new/template_demo/16-01-2020/stock-signup-form-demo_Free/1323255100/web/images/bg.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height:'100vh',
      backgroundAttachment: 'fixed'
    
    }}>
      
      <main className="row justify-content-center align-content-center " style= {{height:'70vh'}}>
        <div>
            <h1 className="row justify-content-md-center mb-4 pt-2">Login</h1>
            <form className="  border p-5 " style={{borderRadius:10, backgroundColor:'#007bff', opacity:0.9, width:'110%'}} onSubmit={e => onSubmit(e)}>
              <div className="flex justify-content-between align-content-center mb-4">
                  <label className=""  htmlFor="email">Email:</label>
                  <input id="email" placeholder='Email' type="email" name="email" value={email} onChange={e => onChange(e)}/>
              </div>
              <div className="flex justify-content-between align-content-center">
                  <label className="" htmlFor="password">Password:</label>
                  <input id="password" placeholder='Password'type="password" name="password" value={password} onChange={e => onChange(e)}/>
              </div>
              <div className=" row justify-content-md-center pt-5 " color="secondary"   >
                <button  className="btn btn-success" style={{width:100}}>Login</button>
              </div>
            </form>
        </div>
        
        
      </main>
      
    </div>
    
  );
}

export default Login;
