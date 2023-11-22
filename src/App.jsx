// src/App.jsx
import React from 'react';
import Menu from './components/Menu.jsx';
import Destinations from './components/Destinations.jsx';
import Login from './components/Login.jsx';
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
