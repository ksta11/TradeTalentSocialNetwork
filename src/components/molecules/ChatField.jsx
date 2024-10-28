import './ChatField.css'

export function ChatField({user, messages}) {
    return(
        <>
            <div className="container-fluid">
                <div className="row py-4 bg-secondary-subtle rounded">
                    <div className="col-12">
                        <h5 className="mb-0">Chat con {user}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 chat-field">
                        {messages.map((msg, index) => (
                            <div className="row text-white">
                                {msg[0] === "Tú" ? (
                                    <div className="col-8 ms-auto">
                                        <div className="row">
                                            <div className="col-auto  ms-auto py-2 mt-3 bg-success rounded-4">
                                                <p key={index} className="mb-0 py-2 px-2">
                                                    {msg[1]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-auto py-2 mt-3 bg-primary rounded-4">
                                                <p key={index} className="mb-0 py-2 px-2">
                                                    {msg[1]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row mt-1 py-3 bg-secondary-subtle rounded-3">
                    <div className="input-group">
                        {/* Contenedor para el ícono de archivos, centrado */}
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            <button className="btn btn-primary">
                                <i className="bi bi-plus-circle-fill" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>
                            </button>
                        </div>

                        {/* Campo de entrada flotante */}
                        <div className="col-10 form-floating px-2">
                            <input className="form-control py-1" type="text" placeholder="Escribe un mensaje..." />
                        </div>

                        {/* Botón de enviar, alineado a la derecha */}
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            <button className="btn btn-success">
                                <i className="bi bi-send-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}