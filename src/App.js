import React from 'react';
import './App.css'
import Home from './components/Home';
import Chatbox from './components/Chatbox';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isSignupPage = location.pathname === "/signup";
  return (
    <>
      {!isSignupPage && <Navbar />}
      {!isSignupPage && <Chatbox />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
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
