import React, { useState } from 'react';

import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';
export function Register() {

    return (
        <div className="container-fluid">
            <div className='row justify-content-center mt-5 mb-3'>
                <div className='col-4'>
                    <h1>Registro de Usuario</h1>
                </div>
            </div>
            <div className='row justify-content-center mb-3'>
                <div className='col-4'>
                <FormTextField
                label="Nombre de usuario"
                id="username"
                type="text"
                ariaDescribedby="usernameHelpBlock"
                helpText="El nombre de usuario debe tener entre 3 y 20 caracteres."

                />
                </div>
            </div>
            
            
            
            <div className='row justify-content-center mb-3'>
                <div className='col-4'>
                <FormTextField
                    label="correo electrónico"
                    id="useremail"
                    type="email"
                    ariaDescribedby="useremailHelpBlock"
                    helpText="El correo electrónico debe ser válido."
                />
                
                </div>
            </div>

            <div className='row justify-content-center mb-3'>
                <div className='col-4'>
                <FormTextField
                    label="contraseña"
                    id="userpassword"
                    type="password"
                    ariaDescribedby="userpasswordHelpBlock"
                    helpText="La contraseña debe tener entre 8 y 20 caracteres."
                />
                </div>
            </div>
            
            <div className='row justify-content-center mb-3'>
                <div className='col-4'>
                <FormTextField
                    label="confirmar contraseña"
                    id="userpasswordconfirm"
                    type="password"
                    ariaDescribedby="userpasswordconfirmHelpBlock"
                    helpText="La contraseña debe tener entre 8 y 20 caracteres."
                />

                </div>
            </div>
            
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button_type label="Aceptar" size="lg"/>
            </div>
            
            

        </div>
    );
}