import React from 'react';
import './App.css'
import Home from './components/Home';
import Chatbox from './components/Chatbox';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home />
      <Chatbox/>
    </div>
  );
};

export default App;
