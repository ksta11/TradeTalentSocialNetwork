import React, { useState } from 'react';

import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';

import {useForm} from 'react-hook-form';
import { Form } from 'react-bootstrap';

import './Register.css'; 
export function Register() {
const {register,handleSubmit,formState: {errors},watch}= useForm();
const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    helpText=""
                    {...register("username",{
                        
                        required:
                        { value:true,
                            message:"Nombre de usuario es requerido"

                        },
                        minLength:{
                            value:2,
                            message:"Nombre de usuario debe tener como mínimo 10 caracteres"
                        },
                        maxLength:{

                            value:20,
                            message: "Nombre de usuario debe tener como máximo 60 caracteres"
                        }
                    })}
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                    
                    </div>
                </div>
                
                
                
                <div className='row justify-content-center mb-3'>
                    <div className='col-4'>
                    <FormTextField
                        label="correo electrónico"
                        id="useremail"
                        type="email"
                        ariaDescribedby="useremailHelpBlock"
                        helpText=""
                        {...register("useremail",{
                            required:{
                            value:true,message:"Correo es requerido"
                        
                            },
                            pattern:{
                                value:emailRegex,
                                message:"Correo no válido"
                            }

                    })}
                    />
                    {errors.useremail && <span>{errors.useremail.message}</span>}
                    
                    </div>
                </div>

                <div className='row justify-content-center mb-3'>
                    <div className='col-4'>
                    <FormTextField
                        label="contraseña"
                        id="userpassword"
                        type="password"
                        ariaDescribedby="userpasswordHelpBlock"
                        helpText=""
                        {...register("userpassword",{
                            required:{
                                value:true,
                                message:"Debe de ingresar una contraseña"
                            },
                            minLength:{
                                value:6,
                                message:"Contraseña debe de tener mínimo 6 caracteres"
                            }
                        
                        })}
                    />
                    {errors.userpassword && <span>{errors.userpassword.message}</span>}
                    </div>
                </div>
                
                <div className='row justify-content-center mb-3'>
                    <div className='col-4'>
                    <FormTextField
                        label="confirmar contraseña"
                        id="userpasswordconfirm"
                        type="password"
                        ariaDescribedby="userpasswordconfirmHelpBlock"
                        helpText=""
                        {...register("userpasswordconfirm",{
                            required:{value:true,message:"Debe de confirmar la contraseña"},
                            validate:(value)=>{
                                if (watch('userpassword')==value){
                                    return true;
                                }else{
                                    return "Las contraseñas no coinciden";
                                }
                                    
                            }
                        
                        })}
                    />
                    {errors.userpasswordconfirm && <span>{errors.userpasswordconfirm.message}</span>}

                    </div>
                </div>
                
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button_type label="Aceptar" size="lg" />
                </div>
                
                

            </div>
        </form>
    );
}
