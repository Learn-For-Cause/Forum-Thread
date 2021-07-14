import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Signup.css"
export const Signup = () => {

  const history = useHistory();

  const [user, setUser] = useState({
    userName: "", email: "", password: ""
  })

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

  const postData = async (e) => {
    e.preventDefault();

    const {name:userName, email, password} = user;

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name:userName, email, password
      })
    });

    const data = await res.json();

    if(data.status === 422 || !data) {
      window.alert("Registration Failed");
      console.log("Registration Failed");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      history.push('/api/login');
    }

  }

  return (
    <div className="signup" method="POST">
      {/* <div className = "google"> */}
      <a href="#" className="google1"> <img src="https://img.icons8.com/color/20/000000/google-logo.png" /> Login with Google </a>
      {/* </div> */}
      <a href="#" className="github1"> <img src="https://img.icons8.com/material-outlined/24/000000/github.png" /> Login with Github </a>
      <a href="#" className="facebook1"><img src="https://img.icons8.com/color/20/000000/facebook.png" /> Login with Facebook </a>
      <div className="fields1">
        <b>Username</b>
        <div className="btn2">
          <input className="input1"
            name="userName"
            value={user.userName}
            onChange={handleInputs}
          ></input>
        </div>
        <b>Email</b>
        <div className="btn2">
          <input className="input1"
            name="email"
            value={user.email}
            onChange={handleInputs}
          ></input>
        </div>
        <b>Password</b>
        <div className="btn2">
          <input className="input1" type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
          ></input>
        </div><br />
        <div className="btn2">
          <button className="btn3" onClick={postData}>Sign up</button>
        </div>
      </div>
      <br />
      <div>
        <span>Already have an accont?  </span><a href="/Login">Log in</a>
      </div>
    </div>
  )
}
