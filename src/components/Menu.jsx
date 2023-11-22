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
        <li>Opção 1</li>
        <li>Opção 2</li>
      </ul>
    </div>
  );
};

export default Menu;
