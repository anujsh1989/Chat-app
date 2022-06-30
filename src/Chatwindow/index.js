import React from "react";
import InputEmoji from "react-input-emoji";
import Sidebar from "../Sidebar";
import { auth } from "../firebase";
import "./chatwindow.css";
import { useNavigate } from "react-router-dom";

export default function ChatWindow() {
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    // navigate("/");
    window.location.reload()
    localStorage.clear();
  };

  return (
    <div className="chatwindow">
      <Sidebar />
      <div className="chatwindow-wrapper">
        <div className="chatwindow-user-wrapper">
          <div className="chatwindow-user-image-wrapper">
            <img
              className="chatwindow-user-avatar"
              src="/logo192.png"
              alt="avatar"
            ></img>
          </div>
          <div className="chatwindow-user-info-wrapper">
            <p>UserName</p>
            <h6>User Info</h6>
          </div>
          <div className="chatwindow-user-logout-wrapper">
            <img
              className="chatwindow-user-logout-btn"
              src="/logout.png"
              alt="logout-btn"
              onClick={() => {
                onLogout();
              }}
            ></img>
          </div>
        </div>
        <div className="chatwindow-chat-wrapper">
          <p>test</p>
        </div>
        <div className="chatwindow-message-wrapper">
          <form className="chatwindow-message">
            <InputEmoji value={"userMessage"} placeholder="Type a message" />
          </form>
        </div>
      </div>
    </div>
  );
}
