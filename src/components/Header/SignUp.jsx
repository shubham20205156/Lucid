import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {   
    e.preventDefault();
    const { name, email, password } = credentials;
   
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });
   
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the authtoken and redirect
      localStorage.setItem('token', json.authtoken);
      console.log("signup")
      navigate("/")
      props.showAlert("Account created successfully", "success")
    } else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div className='SignUpContainer'>
      <form onSubmit={handleSubmit}>
        <div class="form-row my-4">
          <div class="form-group col-md-6 my-2">
            <label for="inputPassword4">Full Name</label>
            <input type="text" class="form-control" id="name" name='name' onChange={onChange} placeholder="Enter your full name here" />
          </div>
          <div class="form-group col-md-6 my-2">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="email" name='email' onChange={onChange} placeholder="Enter you email" />
          </div>
          <div class="form-group col-md-6 my-2">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="password" name='password' onChange={onChange} placeholder="Enter Password" />
          </div>
          <div class="form-group col-md-6 my-2">
            <label for="inputPassword4">Confirm Password</label>
            <input type="password" class="form-control" id="cpassword" name='cpassword' onChange={onChange} placeholder="Confirm Password" />
          </div>

        </div>

        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>
  )
}

export default SignUp
