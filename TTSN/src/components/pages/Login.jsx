import React, { useState } from 'react';
import './Login.css';
import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';
export function Login() {



  return (
    <div>
        <h1>Iniciar Sesión</h1>
        <FormTextField
            label="Correo electrónico"
            id="email"
            type="email"
            ariaDescribedby="emailHelpBlock"
            helpText="El correo electrónico debe ser válido."
        />
        <FormTextField
            label="Contraseña"
            id="password"
            type="password"
            ariaDescribedby="passwordHelpBlock"
            helpText="La contraseña debe tener entre 8 y 20 caracteres."
        />
        <Button_type label="Iniciar Sesión" size="lg" />



    </div>
  );
}