import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RouteNames from "../Router/routenames";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/chatwindow");
      })
      .catch((error) => console.error(error));
  };
  const navigate = useNavigate();

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
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={login}>
            Login
          </button>
        </form>
        <div
          className="signup-msg-box"
          onClick={() => navigate(RouteNames.Signup)}
        >
          <p className="signup-msg-txt">New User Click Here To Signup.</p>
        </div>
      </div>
    </div>
  );
}
