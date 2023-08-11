import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/NavBar";
import Content from "./components/Content";
import UserProfile from "./components/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";
import AddMember from "./components/AddMember";

function App() {
  const [validate, setValidate] = useState(true);
  const handleValidate = (data) => {
    setValidate(data);
  };
  useEffect(() => {
    localStorage.setItem("validate", JSON.stringify(validate));
  }, [validate]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar validate={validate} handleValidate={handleValidate} />
        <SideBar validate={validate} />
        <Routes>
          <Route
            path="/"
            element={<Content handleValidate={handleValidate} />}
          ></Route>
          <Route path="/UserProfile" element={<UserProfile />}></Route>
          <Route path="/DashBoard" element={<DashBoard />}></Route>
          <Route path="/AddMember" element={<AddMember />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
