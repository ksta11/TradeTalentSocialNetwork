import React from 'react';
import './Profile.css';

import { Card } from '../molecules/Card'; // Importar el componente Card
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importar Bootstrap Icons

export function Profile() {

  const cardsAchievements = [
    { className: "Logro 1 ", title: "Cerebrito",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Brain.jpg" },
    { className: "Logro 2 ", title: "Profesor",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Teacher.jpg" },
    { className: "Logro 3 ", title: "Experto",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Expert.jpg" },
    { className: "Logro 4 ", title: "Amiguero",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Friendly.jpg" },
    { className: "Logro 5 ", title: "Universitario",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Student.webp" },
    { className: "Logro 6 ", title: "Bilingue",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Bilingual.jpg" },
    { className: "Logro 7 ", title: "Cantante",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Singer.webp" }
    
    // Añade más cards según sea necesario
  ];


  const cardsKnowledge = [
    { className: "Conocimiento 1 ", title: "Matemática",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Math.jpg" },
    { className: "Conocimiento 2 ", title: "Inglés",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/English.avif" },
    { className: "Conocimiento 3 ", title: "Física",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Physics.jpg" },
    { className: "Conocimiento 4 ", title: "Psicología",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Psychology.webp" },
    { className: "Conocimiento 5 ", title: "Filosofía",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Philosophy.webp" },
    { className: "Conocimiento 6 ", title: "Español",content:"Resuelve más de 10 preguntas correctamnete", imageUrl: "/Spanish.avif" }

   
  ]
    return (

      
        <div className="container-fluid px-2 py-5">

        <div className='row justify-content-center'>
                    <div className="col-md-10 col-12"> {/* Cambiado a col-md-10 para que ocupe el mismo espacio que la primera columna en pantallas pequeñas */} 
                                
                            <div className='container'>
                              <h2 className='text-center'>
                                Perfil de Usuario
                              </h2>
                                <div className='row'>
                                    <div className='cardprofile'>
                                      <div className='img1'>
                                        <img src="public\LandscapeImage.jpg" alt="img1" />

                                      </div>
                                      <div className='img2'>

                                        <img src="public\WomanProfilePicture.jpeg" alt="profile" />

                                      </div>
                                      <div className='main'>
                                        <h2 className='text-center'>
                                          John Doe
                                        </h2>

                                        <p className='text-center'>
                                            <p className='username'>john69Coder</p>
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
                            </div>
                          </div>
                          <div className='row-second-container'>
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
