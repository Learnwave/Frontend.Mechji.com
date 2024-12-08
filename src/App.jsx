import React, { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BigNavabr from "./components/Navbar/BigNavabr";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import About from "./pages/About";
import Community from "./pages/Community";
import LoginPopUp from "./components/Loginpopup/LoginPopUp";
import { AppContext } from "./Context/AppContext";

const App = () => {
  
  const {showLogin, SetShowLogin} = useContext(AppContext);

  return (
    <>
      {showLogin ? <LoginPopUp SetShowLogin={SetShowLogin} /> : <></>}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <BrowserRouter>
        
            <Navbar SetShowLogin={SetShowLogin} />
            <BigNavabr SetShowLogin={SetShowLogin} />
            <hr className="" />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Search-results" element={<SearchResults />} />
              <Route path="/About" element={<About />} />
              <Route path="/Community" element={<Community />} />
            </Routes>

            <Footer />
        
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
