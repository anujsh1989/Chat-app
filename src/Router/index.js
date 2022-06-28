import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ChatWindow from "../Chatwindow";
import Login from "../Login";
import Signup from "../Signup";

export default function Router(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element= {<Login/>}/>
    <Route path="/Signup" element= {<Signup/>}/>
    <Route path="/Chatwindow" element= {<ChatWindow/>}/>
</Routes>
</BrowserRouter>
    );
}