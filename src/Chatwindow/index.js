import React from "react";
import InputEmoji from "react-input-emoji";
import Sidebar from "../Sidebar";
import "./chatwindow.css";

export default function ChatWindow() {
  const onLogout = () => {
    alert("test");
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
