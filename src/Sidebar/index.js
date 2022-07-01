import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { db } from "../firebase";
import {  getDocs, collection } from "firebase/firestore";

export default function Sidebar() {
  const {name} = localStorage;
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const initials = name.substring(0,1);

  const fetchUsersData = async () => {
    let usersData = [];
    const usersCollection = await getDocs(collection(db, "Users"));
    if (usersCollection) {
      usersCollection.forEach((doc) => {
        usersData.push(doc.data());
      });
    }
    setData([...usersData]);
  };


  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div className="sidebar-wrapper">
      <div className="user-wrapper">
        <div className="user-image-wrapper">
          <p>{initials}</p>
        </div>
        <div className="user-welcome">
          <p>{`Welcome, ${name}`}</p>
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
        {data.map((item) => {
          return (
            <div key={item.uid} className="sidebar-chatuser">
              <div className="sidebar-chatuser-avatar">
                <img
                  className="chatuser-avatar"
                  alt="avatar"
                  src="/logo192.png"
                ></img>
              </div>
              <div className="chatuser-info">
                <h3>{item.name}</h3>
                <p>{item.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
