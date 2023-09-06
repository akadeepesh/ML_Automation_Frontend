import React from 'react';
import './App.css'
import Home from './components/Home';
import Chatbox from './components/Chatbox';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Home />
        <Chatbox/>
          <Routes>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
    </BrowserRouter>
  );
};

export default App;
