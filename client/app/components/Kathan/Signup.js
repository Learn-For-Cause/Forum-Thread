import React from 'react'
import "./Signup.css"
export const Signup = () => {
  return (
    <div className = "signup">
      {/* <div className = "google"> */}
        <a href="#" className= "google1"> <img src="https://img.icons8.com/color/20/000000/google-logo.png"/> Login with Google </a>
      {/* </div> */}
      <a href="#" className= "github1"> <img src="https://img.icons8.com/material-outlined/24/000000/github.png"/> Login with Github </a>
      <a href="#" className= "facebook1"><img src="https://img.icons8.com/color/20/000000/facebook.png"/> Login with Facebook </a>
      <div className = "fields1">
      <b>Username</b>
        <div className="btn2">
          <input className = "input1"></input>
        </div>
        <b>Email</b>
        <div className="btn2">
          <input className = "input1"></input>
        </div>
        <b>Password</b>
        <div className = "btn2">
          <input className = "input1" type="password"></input>
        </div><br/>
        <div className="btn2">
        <button className="btn3">Sign up</button>
        </div>
      </div>
      <br/>
      <div>
        <span>Already have an accont?  </span><a href="/Login">Log in</a>
      </div>
    </div>
  )
}
