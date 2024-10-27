import React from 'react';
import { useForm } from 'react-hook-form';

import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';

import './Register.css';

export function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (data) => {
        console.log(data); // Aquí puedes manejar los datos del formulario
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className='row justify-content-center mb-3 mt-5'>
                    <div className='col-12 col-sm-8 col-md-6 col-lg-6'>
                        <h1 className="text-center">Registro de Usuario</h1>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-4">
                        <div className='mb-3'>
                            <FormTextField
                                label="Nombre de usuario"
                                id="username"
                                type="text"
                                className="adjust-height"
                                ariaDescribedby="usernameHelpBlock"
                                {...register("username", {
                                    required: { value: true, message: "Nombre de usuario es requerido" },
                                    minLength: { value: 2, message: "Nombre de usuario debe tener como mínimo 2 caracteres" },
                                    maxLength: { value: 20, message: "Nombre de usuario debe tener como máximo 20 caracteres" }
                                })}
                            />
                            {errors.username && <span className="error-message">{errors.username.message}</span>}
                        </div>

                        <div className='mb-3'>
                            <FormTextField
                                label="Correo electrónico"
                                id="useremail"
                                type="email"
                                ariaDescribedby="useremailHelpBlock"
                                {...register("useremail", {
                                    required: { value: true, message: "Correo es requerido" },
                                    pattern: { value: emailRegex, message: "Correo no válido" }
                                })}
                            />
                            {errors.useremail && <span>{errors.useremail.message}</span>}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='mb-3'>
                            <FormTextField
                                label="Contraseña"
                                id="userpassword"
                                type="password"
                                ariaDescribedby="userpasswordHelpBlock"
                                {...register("userpassword", {
                                    required: { value: true, message: "Debe de ingresar una contraseña" },
                                    minLength: { value: 6, message: "Contraseña debe de tener mínimo 6 caracteres" }
                                })}
                            />
                            {errors.userpassword && <span>{errors.userpassword.message}</span>}
                        </div>

                        <div className='mb-3'>
                            <FormTextField
                                label="Confirmar contraseña"
                                id="userpasswordconfirm"
                                type="password"
                                ariaDescribedby="userpasswordconfirmHelpBlock"
                                {...register("userpasswordconfirm", {
                                    required: { value: true, message: "Debe de confirmar la contraseña" },
                                    validate: (value) => value === watch('userpassword') || "Las contraseñas no coinciden"
                                })}
                            />
                            {errors.userpasswordconfirm && <span>{errors.userpasswordconfirm.message}</span>}
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-12 col-sm-8 col-md-6 col-lg-4 text-center'>
                        <Button_type label="Aceptar" size="lg" />
                    </div>
                </div>
            </div>
            
            {/*Nuevo título para registrarse con otras opciones*/}
            <div className='row justify-content-center mb-3 mt-4'>
                <div className='col-12 col-sm-8 col-md-6 col-lg-6'>
                    <h2 className="text-center">---- También ----</h2>
                </div>
            </div>

            {/* Nuevo contenedor para los botones adicionales */}
            <div className="button-container text-center mt-4">
                <Button_type label="Facebook" size="md" className="btn-option1" type='button' />
                <Button_type label="Google" size="md" className="btn-option2" type='button'/>
                <Button_type label="Microsoft" size="md" className="btn-option3" type='button' />
            </div>
        </form>
    );
}
