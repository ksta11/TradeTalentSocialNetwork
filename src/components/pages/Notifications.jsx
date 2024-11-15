import { useState } from 'react';
import './Notifications.css'; // Asegúrate de tener estilos para el contenedor

export function Notifications() {
    const [requests, setRequests] = useState([
        { id: 1, username: 'Usuario1', imageUrl: '/Singer.webp' },
        { id: 2, username: 'Usuario2', imageUrl: '/Singer.webp' },
        { id: 3, username: 'Usuario3', imageUrl: '/Singer.webp' },
    ]);

    const handleAccept = (id) => {
        // Lógica para aceptar la solicitud
        setRequests(requests.filter(request => request.id !== id));
    };

    const handleDeny = (id) => {
        // Lógica para denegar la solicitud
        setRequests(requests.filter(request => request.id !== id));
    };

    return (
        <div className="notifications-container">
            <h2>Solicitudes de Seguimiento</h2>
            {requests.length === 0 ? (
                <p>No tienes solicitudes de seguimiento.</p>
            ) : (
                requests.map(request => (
                    <div key={request.id} className="horizontal-card ">
                        <img src={request.imageUrl} alt={request.username} className="horizontal-card-img" />
                        <div className="horizontal-card-body">
                            <h5 className="horizontal-card-title">{request.username}</h5>
                            <div className="button-group">
                                <button className="accept-button" onClick={() => handleAccept(request.id)}>Aceptar</button>
                                <button className="deny-button" onClick={() => handleDeny(request.id)}>Denegar</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}