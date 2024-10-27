import React, { useState } from 'react';
import './Login.css';
import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';

import {useForm} from 'react-hook-form';


export function Login() {

const {register,handleSubmit,formState:{errors}}= useForm();
const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario
};
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <div className="container mt-">
        <div className='row justify-content-center mb-3 mt-5'>
          <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
            <h1 className="text-center">Iniciar Sesión</h1>
          </div>
        </div>
        <div className='row justify-content-center mb-3'>
          <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
            <FormTextField
              label="Correo o nombre de usuario"
              id="email"
              type="email"
              ariaDescribedby="emailHelpBlock"
              helpText=""
              {...register("email", {
                required: {
                  value: true,
                  message: "Correo o nombre de usuario es requerido"
                },
                pattern: {
                  value: emailRegex,
                  message: "Correo no válido"
                }
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
        </div>
        <div className='row justify-content-center mb-3'>
          <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
            <FormTextField
              label="Contraseña"
              id="password"
              type="password"
              ariaDescribedby="passwordHelpBlock"
              helpText=""
              {...register("password", {
                required: {
                  value: true,
                  message: "Debe de ingresar una contraseña"
                },
                minLength: {
                  value: 6,
                  message: "Contraseña debe de tener mínimo 6 caracteres"
                }
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-8 col-md-6 col-lg-4 text-center'>
            <Button_type label="Iniciar sesión" size="lg"/>
          </div>
        </div>
      </div>
    </form>
  );
}
