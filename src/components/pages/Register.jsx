import React, { useState } from 'react';
import { CampoEntrada } from '../atoms/Campo_entrada';
import { Label } from '../atoms/Label';
import { boton as Boton } from '../atoms/Boton';
import './Register.css';

export function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
    };

    return (
        <div className="register-container">
            <h1>Registro de Usuario</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Label htmlFor="username">Nombre de usuario</Label>
                    <CampoEntrada
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <CampoEntrada
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="password">Contraseña</Label>
                    <CampoEntrada
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                    <CampoEntrada
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Boton type="submit">
                    Registrarse
                </Boton>
            </form>
        </div>
    );
}