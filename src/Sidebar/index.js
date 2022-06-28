import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="user-wrapper">
        <div className="user-image-wrapper">
          <p>a</p>
        </div>
        <div className="user-welcome">
          <p>Welcome</p>
        </div>
      </div>
      <div className="search-wrapper">
        <div className="search-bar">
          <div className="search-icon-wrapper">
            <img
              className="search-icon"
              src="/search.png"
              alt="search-icon"
            ></img>
          </div>
          <div className="search-input">
            <p>Type here to search</p>
          </div>
        </div>
      </div>
      <div className="sidebar-chatuser-wrapper">
        <div className="sidebar-chatuser">
          <div className="sidebar-chatuser-avatar">
            <img
              className="chatuser-avatar"
              alt="avatar"
              src="/logo192.png"
            ></img>
          </div>
          <div className="chatuser-info">
            <h3>Test</h3>
            <p>Test 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
