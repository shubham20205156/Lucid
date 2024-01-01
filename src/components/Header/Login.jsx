
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    
    if (json.success) {
      // save the authtoken and redirect
      localStorage.setItem('token', json.authtoken);        
      navigate("/")
      props.showAlert("Login successfully", "success")
    } else {
      props.showAlert("invalid credentials ", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='SignUpContainer'>
      <form onSubmit={handleSubmit}>
        <div class="form-row my-4">
          <div class="form-group col-md-6 my-2">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" value={credentials.email} onChange={onChange} id="email" name='email' placeholder="Email" />
          </div>
          <div class="form-group col-md-6 my-2">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Password" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login
