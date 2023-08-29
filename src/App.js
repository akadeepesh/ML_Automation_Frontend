import React from 'react';
import './App.css'
import Home from './components/Home';
import Chatbox from './components/Chatbox';

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Chatbox/>
    </div>
  );
};

export default App;
