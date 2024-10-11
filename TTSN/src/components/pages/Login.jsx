import React, { useState } from 'react';
import './Login.css';
import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';
export function Login() {



  return (
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
                    />
                  </div>
            </div>
        
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button_type label="Iniciar sesión" size="lg"/>
            </div>



    </div>
  );
}