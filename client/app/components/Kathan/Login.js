import React from 'react'
import "./Login.css"
export const Login = () => {
  return (
    <div className = "login">
      {/* <div className = "google"> */}
        <a href="#" className= "google"> <img src="https://img.icons8.com/color/20/000000/google-logo.png"/> Login with Google </a>
      {/* </div> */}
      <a href="#" className= "github"> <img src="https://img.icons8.com/material-outlined/24/000000/github.png"/> Login with Github </a>
      <a href="#" className= "facebook"><img src="https://img.icons8.com/color/20/000000/facebook.png"/> Login with Facebook </a>
      <div className = "fields">
      <b>Email</b>
        <div className="btn1">
          <input className = "input"></input>
        </div>
        <b>Password</b>
        <div className = "btn1">
          <input className = "input" type="password"></input>
        </div><br/>
        <div className="btn1">
        <button className="btn">Log in</button>
        </div>
      </div>
      <br/>
      <div>
        <span>Don't have an accont?  </span><a href="/Signup">sign up</a>
      </div>
    </div>
  )
}
