// src/components/Menu.tsx
import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <img src="caminho_da_sua_imagem.jpg" alt="Imagem" />
      <ul>
        <li>Opção 1</li>
        <li>Opção 2</li>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default Menu;
