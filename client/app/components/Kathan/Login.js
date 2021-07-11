import React, { useState } from 'react'
import "./Login.css"
export const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (email && password) {
      axios.post(`${process.env.port}/api/login`, {
        email,
        password,
      })
        .then(res => {
          setFormData({
            ...formData,
            email: '',
            password: '',
          });
          toast.success("Log in successful");
        }).catch(err => {
          toast.error("Log in unsuccessful");
        });
    } else {
      toast.error("Please fil all the fields.")
    }
  };

  return (
    <div className="login">
      {/* <div className = "google"> */}
      <a href="#" className="google"> <img src="https://img.icons8.com/color/20/000000/google-logo.png" /> Login with Google </a>
      {/* </div> */}
      <a href="#" className="github"> <img src="https://img.icons8.com/material-outlined/24/000000/github.png" /> Login with Github </a>
      <a href="#" className="facebook"><img src="https://img.icons8.com/color/20/000000/facebook.png" /> Login with Facebook </a>
      <div className="fields">
        <b>Email</b>
        <div className="btn1">
          <input className="input" type="email" value={email} onChange={handleChange}></input>
        </div>
        <b>Password</b>
        <div className="btn1">
          <input className="input" type="password" value={password} onChange={handleChange}></input>
        </div><br />
        <div className="btn1">
          <button className="btn" onSubmit={handleSubmit}>Log in</button>
        </div>
      </div>
      <br />
      <div>
        <span>Don't have an accont?  </span><a href="/Signup">Sign up</a>
      </div>
    </div>
  )
}
