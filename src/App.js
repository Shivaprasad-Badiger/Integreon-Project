import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/NavBar";
import Content from "./components/Content";
import UserProfile from "./components/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";
import AddMember from "./components/AddMember";
import { Provider } from "react-redux";
import store from "./components/redux/store";


function App() {
  const [validate, setValidate] = useState(JSON.parse(localStorage.getItem("validate")));
  const handleValidate = (data) => {
    setValidate(data);
  };

  return (
    <Provider store={store}>
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
    </Provider>


  );
}

export default App;