import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ChatField } from '../molecules/ChatField';
import './Chat.css'

export function Chat() {
    const userChats = ["Pepe Grillo", "Thomasa", "Davide", "Dariana", "Santiago", "Lucía", "Carlos", "María", "Andrés", "Valentina"];

    // Estado para almacenar el usuario seleccionado
    const [selectedUser, setSelectedUser] = useState(userChats[0]);

    // Simulación de chats por usuario
    const messages = {
        "Pepe Grillo": [
            ["Pepe Grillo", "Hola, ¿cómo estás?"],
            ["Tú", "Bien, ¿y tú?"],
            ["Pepe Grillo", "Todo bien, pensando en ir al parque."],
            ["Tú", "¿A qué hora?"],
            ["Pepe Grillo", "Después de almorzar, tipo 2."],
            ["Tú", "¡Perfecto! Nos vemos allá."]
        ],
        "Thomasa": [
            ["Thomasa", "¿Qué tal tu día?"],
            ["Tú", "Un poco ocupado, ¿y el tuyo?"],
            ["Thomasa", "Relajado, viendo series en casa."],
            ["Tú", "¡Qué envidia! ¿Qué estás viendo?"],
            ["Thomasa", "Empecé 'Stranger Things', está buenísima."]
        ],
        "Davide": [
            ["Davide", "¿Viste el partido?"],
            ["Tú", "Sí, fue increíble."],
            ["Davide", "¡Ese gol en el minuto 90 fue épico!"],
            ["Tú", "Totalmente, no pensé que remontarían."],
            ["Davide", "¿Te animas a jugar mañana en la cancha?"],
            ["Tú", "¡Claro! Avisa la hora y voy."]
        ],
        "Dariana": [
            ["Dariana", "¿Ya terminaste el proyecto?"],
            ["Tú", "Casi, solo falta revisar unos detalles."],
            ["Dariana", "Yo estoy atorada con un error raro."],
            ["Tú", "¿Qué error? A ver si puedo ayudarte."],
            ["Dariana", "Es un bucle infinito en la función de pago."],
            ["Tú", "Pásame el código y lo reviso."]
        ],
        "Santiago": [
            ["Santiago", "¿Qué planes para hoy?"],
            ["Tú", "Todavía no lo sé, ¿alguna idea?"],
            ["Santiago", "Podríamos ir al cine en la noche."],
            ["Tú", "¡Me gusta! ¿Qué película quieres ver?"],
            ["Santiago", "Estaba pensando en 'Oppenheimer'."],
            ["Tú", "Perfecto, nos vemos a las 8 entonces."]
        ],
        "Lucía": [
        ["Lucía", "¿Te gustaría salir a caminar hoy?"],
        ["Tú", "Sí, suena bien. ¿A qué hora?"],
        ["Lucía", "Podríamos ir a las 5."],
        ["Tú", "Perfecto, ¿dónde nos encontramos?"],
        ["Lucía", "En el parque central."],
        ],
        "Carlos": [
            ["Carlos", "Hola, ¿cómo va el trabajo?"],
            ["Tú", "Bien, un poco ocupado. ¿Y el tuyo?"],
            ["Carlos", "Igual, pero me estoy adaptando."],
            ["Tú", "Eso es bueno. ¿Te gustaría tomar un café esta semana?"],
            ["Carlos", "Claro, ¿qué tal el jueves?"],
        ],
        "María": [
            ["María", "¡Hola! ¿Has leído el último libro de esa autora?"],
            ["Tú", "No, aún no. ¿Te gustó?"],
            ["María", "Me encantó, tiene una forma de narrar muy interesante."],
            ["Tú", "Genial, lo agregaré a mi lista."],
            ["María", "Dime cuando lo termines y lo comentamos."],
        ],
        "Andrés": [
            ["Andrés", "¿Has probado la nueva pizzería en el centro?"],
            ["Tú", "No, pero he escuchado buenos comentarios."],
            ["Andrés", "Deberíamos ir un día, tienen pizzas gourmet."],
            ["Tú", "¡Eso suena increíble! ¿Te parece el sábado?"],
            ["Andrés", "¡Perfecto! A las 7."],
        ],
        "Valentina": [
            ["Valentina", "Hola, ¿cómo te va en el gimnasio?"],
            ["Tú", "Bien, he estado yendo regularmente."],
            ["Valentina", "Eso es genial, yo también quiero empezar."],
            ["Tú", "Te puedo acompañar si quieres."],
            ["Valentina", "¡Sí, me encantaría! ¿Cuándo vamos?"],
        ]
    };
    

    return (
        <div className="container-fluid px-2 py-3">
            <div className="row">
                <div className="col-4 chat-list">
                    <ListGroup>
                        {userChats.map((chat) => (
                            <ListGroup.Item className="py-3 my-2 rounded-3 item shadow" key={chat} onClick={() => setSelectedUser(chat)} active={selectedUser === chat} style={{ cursor: 'pointer' }}>
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <i className="bi bi-file-earmark-person"></i>
                                    </div>
                                    <div className="col-10 text-center font-size-3">
                                        {chat}
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>


                <div className="col-8">
                    <ChatField user={selectedUser} messages={messages[selectedUser]}></ChatField>
                </div>
            </div>
        </div>
    );
}
