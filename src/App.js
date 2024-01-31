import React from "react";
import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";
// import Chatbox from "./components/Chatbox";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Tokenization from "./components/Tokenization";
import StopWord from "./components/Stop-word";
import SemLem from "./components/SemLem";
import NLP from "./components/NLP";
import NoiseReduction from "./components/NoiseReduction";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { getProfile } from "./auth";
import { useState, useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(true);

  const publicRoutes = ["/signup", "/login"];

  const privateRoutes = [
    "/home/",
    "/home/tokenization",
    "/home/stop-word-removal",
    "/home/StemLem",
    "/home/nlp",
    "/home/noise-reduction",
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      const data = await getProfile(token);
      // console.log("user respone data: ", data.message);
      // undefined data.message means no errors.
      if (data.message === undefined) {
        setCurrentUser(true);
      } else {
        setCurrentUser(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (!currentUser && privateRoutes.includes(location.pathname)) {
      navigate("/");
    } else if (currentUser && publicRoutes.includes(location.pathname)) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, [currentUser, location, navigate]);

  return (
    <>
      {!publicRoutes.includes(location.pathname)} {/*&& <Chatbox />*/}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/tokenization" element={<Tokenization />}></Route>
        <Route path="/home/stop-word-removal" element={<StopWord />}></Route>
        <Route path="/home/StemLem" element={<SemLem />}></Route>
        <Route path="/home/nlp" element={<NLP />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home/noise-reduction"
          element={<NoiseReduction />}
        ></Route>
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
