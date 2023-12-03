// src/components/Menu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <button onClick={() => navigate("/login")}>Login</button>
      <p>\n</p>
      <ul>
        <li>TITULO DO SITE AQUI</li>
        <li>EXPLORE VIAGENS</li>
      </ul>
    </div>
  );
};

export default Menu;
