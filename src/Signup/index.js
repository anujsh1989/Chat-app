import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc,setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import "./signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate('/chatwindow')
        console.log(auth);
        const { uid } = auth.user;
        
        let userData = {
          uid,
          name,
          email
        };
        
        setDoc(doc(db, "Users", uid), userData)
        .then((resp) => {
          localStorage.setItem("uid",uid);
          localStorage.setItem("email",email);
          localStorage.setItem("password",password);
        })
        .catch((err) => {
          debugger
        })
      })
      .catch((error) => {
        debugger;
        console.error(error);
      });
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <div className="app-logo">
          <img className="logo" src="./chat-box.png" alt="logo"></img>
        </div>
        <div className="signup-msg-box">
          <h3 className="signup-msg">Signup To Chat App</h3>
        </div>
        <form className="signup-form">
          <input
            className="form-field"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-field"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-field"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="form-field"
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <button className="signup-btn" onClick={register}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
