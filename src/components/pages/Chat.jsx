import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export function Chat() {
    const userChats = ["Pepe Grillo", "Thomasa", "Davide", "Dariana", "Santiago"];

    // Estado para almacenar el usuario seleccionado
    const [selectedUser, setSelectedUser] = useState(userChats[0]);

    // Simulación de chats por usuario
    const messages = {
        "Pepe Grillo": ["Hola, ¿cómo estás?", "¿Nos vemos mañana?"],
        "Thomasa": ["¿Qué tal tu día?", "Tengo algo que contarte."],
        "Davide": ["¿Viste el partido?", "¡Fue increíble!"],
        "Dariana": ["¿Ya terminaste el proyecto?", "Necesito ayuda con un error."],
        "Santiago": ["¿Qué planes para hoy?", "Vamos a la reunión en la tarde."]
    };

    return (
        <div className="container-fluid px-2 py-3">
            <div className="row">
                <div className="col-4">
                    <ListGroup>
                        {userChats.map((chat) => (
                            <ListGroup.Item className="py-3 my-2 rounded text-center " key={chat} onClick={() => setSelectedUser(chat)} active={selectedUser === chat} style={{ cursor: 'pointer' }}>
                                {chat}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>


                <div className="col-8">
                    <h5>Chat con {selectedUser}</h5>
                    <div className="mt-3">
                        {messages[selectedUser].map((msg, index) => (
                            <p key={index} className="mb-2">
                                {msg}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
