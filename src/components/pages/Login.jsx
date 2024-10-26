import React, { useState } from 'react';
import './Login.css';
import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';

import {useForm} from 'react-hook-form';


export function Login() {

const {register,handleSubmit}= useForm();
const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario
};


  return (

    <form onSubmit={handleSubmit(onSubmit)}> //cuando se enviíe el form debemos de llamar ala fn onSubmit
      <div className="container-fluid">

              <div className='row justify-content-center mb-3 mt-5'>
                    <div className='col-2'>
                        <h1>Iniciar Sesión</h1>
                    </div>
              </div>
          

              <div className='row justify-content-center mb-3'>
                    <div className='col-4'>
                      <FormTextField
                        label="Correo electrónico"
                        id="email"
                        type="email"
                        ariaDescribedby="emailHelpBlock"
                        helpText="El correo electrónico debe ser válido."
                        {...register("email",{required:true})}
                      /> 
                    </div>
              </div>


              <div className='row justify-content-center mb-3'>
                    <div className='col-4'>
                      <FormTextField
                      label="Contraseña"
                      id="password"
                      type="password"
                      ariaDescribedby="passwordHelpBlock"
                      helpText="La contraseña debe tener entre 8 y 20 caracteres."
                      {...register("password")}
                      />
                    </div>
              </div>
          
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button_type label="Iniciar sesión" size="lg"/>
              </div>



      </div>
    </form>
  );
}