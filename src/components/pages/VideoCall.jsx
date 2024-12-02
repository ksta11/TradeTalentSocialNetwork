import React, { useState } from 'react';

export function VideoCall({ otherPersonName }) {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);

  // Funciones para manejar los botones
  const toggleMic = () => setIsMicOn((prevState) => !prevState);
  const toggleCamera = () => setIsCameraOn((prevState) => !prevState);

  return (
    <div className="container text-center my-5">
      <h2>Videollamada con {otherPersonName}</h2>
      
      {/* Ventana de video */}
      <div 
        className="border bg-dark mx-auto my-4" 
        style={{ width: '600px', height: '400px' }}
      >
        <p className="text-white pt-5">Aquí se vería la imagen de {otherPersonName}</p>
      </div>

      {/* Botones de control */}
      <div>
        <button 
          className="btn btn-danger mx-2" 
          onClick={() => alert('Llamada finalizada')}
        >
          <i className="bi bi-telephone-fill"></i> Colgar
        </button>
        <button 
          className={`btn ${isMicOn ? 'btn-secondary' : 'btn-warning'} mx-2`} 
          onClick={toggleMic}
        >
          <i className={`bi ${isMicOn ? 'bi-mic-fill' : 'bi-mic-mute-fill'}`}></i> {isMicOn ? 'Silenciar' : 'Activar Micro'}
        </button>
        <button 
          className={`btn ${isCameraOn ? 'btn-secondary' : 'btn-warning'} mx-2`} 
          onClick={toggleCamera}
        >
          <i className={`bi ${isCameraOn ? 'bi-camera-video-fill' : 'bi-camera-video-off-fill'}`}></i> {isCameraOn ? 'Apagar Cámara' : 'Encender Cámara'}
        </button>
      </div>
    </div>
  );
}
