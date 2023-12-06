// src/components/Menu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <button onClick={() => navigate("/login")}>Login</button>
      <p></p>
      <ul>
        <li>WAYFARER-PALL SEU APP DE VIAGENS</li>
        <li>EXPLORE VIAGENS</li>
      </ul>
    </div>
  );
};

export default Menu;
