// src/components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para autenticação
    console.log('Username:', username);
    console.log('Password:', password);
    // Adicione a lógica de autenticação real aqui
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
