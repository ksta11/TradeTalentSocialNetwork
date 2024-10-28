import React from 'react';
import './Login.css';
import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';
import { useForm } from 'react-hook-form';

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="login-container">
      <div className="left-image">
        <img src="/LogoTTSN.jpg" alt="Descripción de la imagen" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center mb-3">
            <h1>Iniciar Sesión</h1>
          </div>
          <div className="mb-3 align-textfields">
            <FormTextField
              label="Nombre de usuario o correo"
              id="email"
              type="email"
              ariaDescribedby="emailHelpBlock"
              helpText=""
              {...register("email", {
                required: {
                  value: true,
                  message: "Nombre de usuario o correo es requerido"
                },
                pattern: {
                  value: emailRegex,
                  message: "Nombre de usuario o correo no válido"
                }
              })}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>
          <div className="mb-3 align-textfields">
            <FormTextField
              label="Contraseña"
              id="password"
              type="password"
              ariaDescribedby="passwordHelpBlock"
              helpText=""
              {...register("password", {
                required: {
                  value: true,
                  message: "Debe ingresar una contraseña"
                },
                minLength: {
                  value: 6,
                  message: "Contraseña debe de tener mínimo 6 caracteres"
                }
              })}
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
            <div className="forgot-password">
              <a>¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          <div className="text-center">
            <Button_type label="Entrar" size="lg" />
          </div>
        </form>
      </div>
    </div>
  );
}
