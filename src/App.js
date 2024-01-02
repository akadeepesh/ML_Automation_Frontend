import React from "react";
import "./App.css";
// import Home from './components/Home';
import Landing from "./components/Landing";
import Chatbox from "./components/Chatbox";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Tokenization from "./components/Tokenization";
import StopWord from "./components/Stop-word";
import Lemmatization from "./components/Lematize";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isHidden =
    location.pathname === "/signup" || location.pathname === "/login";
  return (
    <>
      {!isHidden && <Navbar />}
      {!isHidden && <Chatbox />}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tokenization" element={<Tokenization />}></Route>
        <Route path="/stop-word-removal" element={<StopWord />}></Route>
        <Route path="/StemLem" element={<Lemmatization />}></Route>
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
