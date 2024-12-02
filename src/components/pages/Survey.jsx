import React from 'react';
import { useForm } from 'react-hook-form';
import Button_type from '../atoms/Button';

export function Survey() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); 
        alert("Encuesta enviada. ¡Gracias por participar!");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 display-4 text-primary font-weight-bold">Encuesta de Satisfacción</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*Pregunta1*/}
                <div className="mb-3">
                    <label className="form-label">1. ¿Cómo calificarías nuestro servicio?</label>
                    <select className="form-select" {...register("serviceRating", { required: { value: true, message: "Calificación es requerida" } })}>
                        <option value="">Selecciona una opción</option>
                        <option value="1">1 - Muy malo</option>
                        <option value="2">2 - Malo</option>
                        <option value="3">3 - Regular</option>
                        <option value="4">4 - Bueno</option>
                        <option value="5">5 - Excelente</option>
                    </select>
                    {errors.serviceRating && <span className="text-danger">{errors.serviceRating.message}</span>}
                </div>

                
                <div className="mb-3">
                    <label className="form-label">2. ¿Qué mejorarías en nuestro servicio?</label>
                    <textarea className="form-control" {...register("improvements", { required: { value: true, message: "Este campo es requerido" } })} rows="3"></textarea>
                    {errors.improvements && <span className="text-danger">{errors.improvements.message}</span>}
                </div>

                {/* Pregunta3 */}
                <div className="mb-3">
                    <label className="form-label">3. ¿Recomendarías nuestro servicio a otros?</label>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Sí" {...register("recommend", { required: { value: true, message: "Debes seleccionar una opción" } })} />
                            <label className="form-check-label">Sí</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="No" {...register("recommend")} />
                            <label className="form-check-label">No</label>
                        </div>
                        {errors.recommend && <span className="text-danger">{errors.recommend.message}</span>}
                    </div>
                </div>

                {/*Botón*/}
                <div className="text-center">
                    <Button_type label="Enviar Encuesta" size="lg" />
                </div>
            </form>
        </div>
    );
} 