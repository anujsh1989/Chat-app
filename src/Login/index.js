import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="app-logo">
          <img className="logo" src="./chat-box.png" alt="logo"></img>
        </div>
        <div className="login-msg-box">
          <h3 className="login-msg">Login To Chat App</h3>
        </div>
        <form className="login-form">
          <input className="form-field" placeholder="Email" />
          <input className="form-field" placeholder="Password" />
          <button className="login-btn">Login</button>
        </form>
        <div className="signup-msg-box" >
            <p className="signup-msg-txt" >New User Click Here To Signup.</p>
        </div>
      </div>
    </div>
  );
}
