import React, { useState } from 'react';
import { CampoEntrada } from '../atoms/Campo_entrada';
import { boton as Boton } from '../atoms/Boton';
import './Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log('Iniciar sesión con:', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <CampoEntrada
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <CampoEntrada
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Boton type="submit">Iniciar Sesión</Boton>
        </form>
      </div>
    </div>
  );
}