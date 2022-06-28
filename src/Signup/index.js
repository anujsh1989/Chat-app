import React from "react";
import "./signup.css"

export default function Signup(){
    return(
        <div className="signup-wrapper">
      <div className="signup-box">
        <div className="app-logo">
          <img className="logo" src="./chat-box.png" alt="logo"></img>
        </div>
        <div className="signup-msg-box">
          <h3 className="signup-msg">Signup To Chat App</h3>
        </div>
        <form className="signup-form">
          <input className="form-field" placeholder="Email" />
          <input className="form-field" placeholder="Password" />
          <button className="signup-btn">Register</button>
        </form>
      </div>
    </div>
    );
}