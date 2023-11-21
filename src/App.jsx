// src/App.jsx
import React from 'react';
import Menu from './components/Menu';
import Destinations from './components/Destinations';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Destinations />
      <Login />
    </div>
  );
};

export default App;
