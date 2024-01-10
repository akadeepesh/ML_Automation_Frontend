import React from "react";
import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Chatbox from "./components/Chatbox";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Tokenization from "./components/Tokenization";
import StopWord from "./components/Stop-word";
import Lemmatization from "./components/Lematize";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState, useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const LoginSignup =
    location.pathname === "/signup" || location.pathname === "/login";
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    if (currentUser && LoginSignup) {
      navigate("/home");
    }
  }, [currentUser, LoginSignup, navigate]);

  return (
    <>
      {!LoginSignup && <Chatbox />}
      <Routes>
        <Route path="/" element={<Landing />} />
        {currentUser ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/tokenization" element={<Tokenization />}></Route>
            <Route path="/stop-word-removal" element={<StopWord />}></Route>
            <Route path="/StemLem" element={<Lemmatization />}></Route>
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
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
