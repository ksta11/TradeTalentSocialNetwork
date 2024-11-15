import React from 'react';
import { useForm } from 'react-hook-form';
import FormTextField from '../atoms/Form_text';
import Button_type from '../atoms/Button';
// import './PasswordRecovery.css'; // Asegúrate de tener un archivo CSS si es necesario

export function PasswordRecovery() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data); // Aquí puedes manejar los datos del formulario
        // Aquí puedes agregar la lógica para enviar el enlace de recuperación
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container-recovery">
                <div className='row justify-content-center mb-3 mt-5'>
                    <div className='col-12 col-sm-8 col-md-6 col-lg-6'>
                        <h1 className="text-center">Recuperación de Contraseña</h1>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-4">
                        <div className='mb-3'>
                            <FormTextField
                                label="Correo electrónico"
                                id="useremail"
                                type="email"
                                ariaDescribedby="useremailHelpBlock"
                                {...register("useremail", {
                                    required: { value: true, message: "Correo es requerido" },
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Correo no válido" }
                                })}
                            />
                            {errors.useremail && <span className="error-message">{errors.useremail.message}</span>}
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-12 col-sm-8 col-md-6 col-lg-4 text-center'>
                        <Button_type label="Enviar Enlace de Recuperación" size="lg" />
                    </div>
                </div>
            </div>
        </form>
    );
}
