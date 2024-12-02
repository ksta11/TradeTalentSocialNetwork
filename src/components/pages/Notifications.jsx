import { useState } from 'react';
import './Notifications.css';
import { ClassNotificationCard } from '../molecules/ClassNotificationCard';

export function Notifications() {
    const [requests, setRequests] = useState([
        { id: 1, username: 'Usuario1', imageUrl: '/Singer.webp' },
        { id: 2, username: 'Usuario2', imageUrl: '/Singer.webp' },
        { id: 3, username: 'Usuario3', imageUrl: '/Singer.webp' },
    ]);

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            className: "Matemáticas Avanzadas",
            personName: "Dayro Moreno",
            date: "2024-11-20",
            time: "10:00 AM",
        },
        {
            id: 2,
            className: "Física Cuántica",
            personName: "Jacobo Arroyave",
            date: "2024-11-21",
            time: "2:00 PM",
        },
        {
            id: 3,
            className: "Programación Web",
            personName: "Santiago Castaño",
            date: "2024-11-22",
            time: "4:00 PM",
        },
    ]);

    const handleAccept = (id) => {
        setRequests(requests.filter(request => request.id !== id));
    };

    const handleDeny = (id) => {
        setRequests(requests.filter(request => request.id !== id));
    };


    const handleClearRequests = () => {
        setRequests([]);
    };


    const handleClearNotifications = () => {
        setNotifications([]);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="notifications-container col-6">
                    <h2 className="text-center mb-4 display-4 text-primary font-weight-bold">Solicitudes de Seguimiento</h2>
                    <button className="btn btn-danger mb-3" onClick={handleClearRequests}>Eliminar Todas las Solicitudes</button>
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

                <div className="col-6">
                    <h2 className="text-center mb-4 display-4 text-primary font-weight-bold">Notificaciones de Clases</h2>
                    <button className="btn btn-danger mb-3" onClick={handleClearNotifications}>Eliminar Todas las Notificaciones</button>
                    <div className="row">
                        {notifications.length === 0 ? (
                            <p>No tienes notificaciones de clases.</p>
                        ) : (
                            notifications.map((notif) => (
                                <div key={notif.id} className="col-md-4">
                                    <ClassNotificationCard
                                        className={notif.className}
                                        personName={notif.personName}
                                        date={notif.date}
                                        time={notif.time}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
