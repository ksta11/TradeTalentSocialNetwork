import React, { useState } from 'react';
import './Profile.css';

import { Card } from '../molecules/Card'; // Importar el componente Card
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importar Bootstrap Icons

export function Profile() {

  const [showReportOptions, setShowReportOptions] = useState(false); // Estado para mostrar opciones de reporte
  const [reportSuccess, setReportSuccess] = useState(false); // Estado para mostrar mensaje de éxito
  const [userName, setUserName] = useState("John Doe"); // Estado para el nombre del usuario
  const [userHandle, setUserHandle] = useState("john69Coder"); // Estado para el nombre de usuario
  const [isSwitchOn, setIsSwitchOn] = useState(false); // Estado para el switch

  const handleReportClick = () => {
    setShowReportOptions(!showReportOptions); // Alternar visibilidad
    if (!showReportOptions) {
      setReportSuccess(false); // Ocultar mensaje de éxito al mostrar opciones de reporte
    }
  };

  const handleReportButtonClick = () => {
    setReportSuccess(true); // Mostrar mensaje de éxito
    setShowReportOptions(false); // Ocultar opciones de reporte
  };

  const handleCloseDialog = () => {
    setReportSuccess(false); // Cerrar el diálogo
  };

  const handleEditUserName = () => {
    const newUserName = prompt("Ingrese el nuevo nombre:", userName);
    if (newUserName) setUserName(newUserName); // Actualizar nombre si se proporciona
  };

  const handleEditUserHandle = () => {
    const newUserHandle = prompt("Ingrese el nuevo nombre de usuario:", userHandle);
    if (newUserHandle) setUserHandle(newUserHandle); // Actualizar nombre de usuario si se proporciona
  };

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn); // Alternar el estado del switch
  };

  const cardsAchievements = [
    { className: "Logro 1 ", title: "Cerebrito",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Brain.jpg" },
    { className: "Logro 2 ", title: "Profesor",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Teacher.jpg" },
    { className: "Logro 3 ", title: "Experto",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Expert.jpg" },
    { className: "Logro 4 ", title: "Amiguero",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Friendly.jpg" },
    { className: "Logro 5 ", title: "Universitario",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Student.webp" },
    { className: "Logro 6 ", title: "Bilingue",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Bilingual.jpg" },
    { className: "Logro 7 ", title: "Cantante",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Singer.webp" }
  ];

  const cardsKnowledge = [
    { className: "Conocimiento 1 ", title: "Matemática",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Math.jpg" },
    { className: "Conocimiento 2 ", title: "Inglés",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/English.avif" },
    { className: "Conocimiento 3 ", title: "Física",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Physics.jpg" },
    { className: "Conocimiento 4 ", title: "Psicología",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Psychology.webp" },
    { className: "Conocimiento 5 ", title: "Filosofía",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Philosophy.webp" },
    { className: "Conocimiento 6 ", title: "Español",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Spanish.avif" }
  ];

  return (
    <div className="container-fluid px-2 py-5">
      <div className='row justify-content-center'>
        <div className="col-md-10 col-12"> 
          <div className='container'>
            <h2 className='text-center'>Perfil de Usuario</h2>
            <div className='row'>
              <div className='cardprofile'>
                <div className='img1'>
                  <img src="public\LandscapeImage.jpg" alt="img1" />
                </div>
                <div className="form-check form-switch" style={{ display: 'inline-block', marginTop: '10px' }}>
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      role="switch" 
                      checked={isSwitchOn} 
                      onChange={handleSwitchChange} 
                    />
                    <label className="form-check-label">
                      {isSwitchOn ? 'Disponible' : 'No disponible'}
                    </label>
                </div>
                <div className='img2'>
                  <img src="public\WomanProfilePicture.jpeg" alt="profile" />
                </div>
                <div className='main'>
                  <h2 className='text-center'>{userName}
                    <button className="btn btn-link" onClick={handleEditUserName}>
                      <i className="bi bi-pencil"></i>
                    </button>
                  </h2>
                  <p className='text-center'>
                    <p className='username'>{userHandle}
                      <button className="btn btn-link" onClick={handleEditUserHandle}>
                        <i className="bi bi-pencil"></i>
                      </button>
                    </p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    maybe hijo locust somebody like that.
                  </p>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>

      <div className='row justify-content-center'>
        <div className='col-md-6 col-12'>
          <div className='custom-container-options'>
            <div className='row'>
              <div className='d-flex justify-content-around mt-3'>
                <div className='icon-wrapper'>
                  <i className="bi bi-camera-video circular-icon"></i>
                  <span className='mensaje-icono'>Video</span> 
                </div>
                <div className='icon-wrapper'>
                  <i className="bi bi-telephone circular-icon"></i>
                  <span className='mensaje-icono'>Llamada</span> 
                </div>
                <div className='icon-wrapper'>
                  <i className="bi bi-chat-dots circular-icon"></i>
                  <span className='mensaje-icono'>Mensaje</span> 
                </div>
                <div className='icon-wrapper'>
                  <i className="bi bi-people circular-icon"></i>
                  <span className='mensaje-icono'>Añadir</span> 
                </div>
                <div className='icon-wrapper'>
                  <i className="bi bi-exclamation-triangle circular-icon" onClick={handleReportClick}></i>
                  <span className='mensaje-icono'>Reportar</span>
                </div>
              </div>
            </div>
            
            {showReportOptions && ( // Mover el contenedor de opciones de reporte fuera del div de íconos
              <div className="report-options mt-4" style={{ width: '42%', marginLeft: '405px', textAlign: 'center'}}>
                <p><strong>¿Por qué quieres reportar a este usuario?</strong></p>
                <div className="button-group" style={{ width: '98%', margin: '0 auto'}}>
                  <button className="btn btn-danger w-100 mb-2" onClick={handleReportButtonClick}>Comportamiento inapropiado</button>
                  <button className="btn btn-danger w-100 mb-2" onClick={handleReportButtonClick}>Spam</button>
                  <button className="btn btn-danger w-100 mb-2" onClick={handleReportButtonClick}>Suplantación de identidad</button>
                  <button className="btn btn-danger w-100 mb-3" onClick={handleReportButtonClick}>Otro</button>
                </div>
              </div>
            )}
            {reportSuccess && ( // Mostrar mensaje de éxito si reportSuccess es true
              <div className="alert alert-success mt-4" role="alert" style={{ width: '29%', marginLeft: '435px', textAlign: 'center' }}>
                ¡Usuario reportado exitosamente!
                <div style={{ marginTop: '10px' }}> 
                  <button // div anidado porque el botón cerrar está dentro del diálogo
                    onClick={handleCloseDialog}
                    style={{
                      background: '#ff8080', // Color de fondo normal
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      padding: '5px 10px',
                      transition: 'background-color 0.3s', // Transición suave
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#ff1a1a'} // Color de fondo en hover (rojo más oscuro)
                    onMouseLeave={(e) => e.currentTarget.style.background = '#ff8080'} // Restaurar color de fondo normal
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className='row-second-container' style={{marginTop: '50px'}}>
                            <div className='row'>
                              <p className='text-center'>Calificar</p>
                            </div>
                            <div className='stars-container'>
                              <div className='d-flex justify-content-around mt-1.9'>
                                <div className='icon-wrapper-stars'>
                                  <i className="bi bi-star-fill circular-icon-star"></i>
                                </div>
                                <div className='icon-wrapper-stars'>
                                  <i className="bi bi-star-fill circular-icon-star"></i>
                                </div>
                                <div className='icon-wrapper-stars'>
                                  <i className="bi bi-star-fill circular-icon-star"></i>
                                </div>
                                <div className='icon-wrapper-stars'>
                                  <i className="bi bi-star-fill circular-icon-star"></i>
                                </div>
                                <div className='icon-wrapper-stars'>
                                  <i className="bi bi-star-fill circular-icon-star"></i>
                                </div>
                              </div>
                            </div>
          </div>
          
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10 col-12">
          <div className="custom-container">
            <div className="row">
              <h3 className="text-center">Logros</h3>
            </div>
            <div className="row flex-nowrap overflow-auto"> 
              {cardsAchievements.map((card) => (
                <div key={card.title} className="card-wrapper">
                  <Card 
                    className={card.className} 
                    title={card.title} 
                    content={card.content} 
                    imageUrl={card.imageUrl} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10 col-12">
          <div className="custom-container">
            <div className="row">
              <h3 className="text-center">Conocimientos</h3>
            </div>
            <div className="row flex-nowrap overflow-auto"> 
              {cardsKnowledge.map((card) => (
                <div key={card.title} className="card-wrapper">
                  <Card 
                    className={card.className} 
                    title={card.title} 
                    content={card.content} 
                    imageUrl={card.imageUrl} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
