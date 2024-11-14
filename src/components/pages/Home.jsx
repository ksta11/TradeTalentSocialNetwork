import './Home.css';
import { Carousel } from '../molecules/Carousel';
import { Card } from '../molecules/Card'; // Asumiendo que tienes un componente Card
import { Header } from '../molecules/Header';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Home() {
  const carouselSlides = [
    {
      title: "Negocios.",
      content: "Expande tu vision acerca de los negocios con los mejores.",
      buttonText: "Más información",
      buttonLink: "#",
      imageUrl: "/img_carousel.jpg"
    },
    {
      title: "Ingenieria.",
      content: "Complementa tus conocimientos sobre ingenieria con nuestros usuarios especializados en cada campo de la ingenieria.",
      buttonText: "Saber más",
      buttonLink: "#",
      imageUrl: "/img_carousel2.webp"
    },
    {
      title: "Desata tu creatividad.",
      content: "Dale rienda suelta a tu creatividad apreniendo acerca de pintura, diseño grafico, danzas y mucho más.",
      buttonText: "Aprende ahora",
      buttonLink: "#",
      imageUrl: "/img_carousel3.png"
    }
  ];

  const cardsScheduledClasses = [
    { className: "Clase programada 1", title: "Clase de Inglés", date: "2024-01-01", imageUrl: "/clase_inglés.png" },
    { className: "Clase programada 2", title: "Clase de Historia", date: "2024-01-02", imageUrl: "/clase_history.png" },
    { className: "Clase programada 3", title: "Clase de Matemáticas", date: "2024-01-03", imageUrl: "/clase_mats.jpg" },
    { className: "Clase programada 4", title: "Clase de Ciencias", date: "2024-01-04", imageUrl: "/clase_ciencias.png" },
    { className: "Clase programada 5", title: "Clase de Arte", date: "2024-01-05", imageUrl: "/clase_arte.jpg" },
    // Añade más cards según sea necesario
  ];

  const cardsLearnNewSkills = [
    { className: "Aprende esta nueva habilidad 1 ", title: "Fotografía", imageUrl: "/photography.jpg" },
    { className: "Aprende esta nueva habilidad 2", title: "Programación", imageUrl: "/programación.jpg" },
    { className: "Aprende esta nueva habilidad 3", title: "Pintura", imageUrl: "/pintura.jpg" },
    { className: "Aprende esta nueva habilidad 4", title: "Cocina", imageUrl: "/kitchen.jpg" },
    { className: "Aprende esta nueva habilidad 5", title: "Música", imageUrl: "/música.jpg" },
    { className: "Aprende esta nueva habilidad 6", title: "Diseño Gráfico", imageUrl: "/graphic_design.jpg" },
    { className: "Aprende esta nueva habilidad 7", title: "Idiomas", imageUrl: "/languages.jpg" },
    { className: "Aprende esta nueva habilidad 8", title: "Jardinería", imageUrl: "/jardinería.jpg" },
    { className: "Aprende esta nueva habilidad 9", title: "Fitness", imageUrl: "/fitness.jpg" },
    { className: "Aprende esta nueva habilidad 10", title: "Ventas", imageUrl: "/ventas.jpg" },
    // Añade más cards según sea necesario
  ];

  return (
    <>
      
      <Carousel slides={carouselSlides} />
      <div className="container-fluid px-2 py-5 ">
        <div className="row mb-4">
          <div className="col-12 bg-dark py-3 rounded-3">
            <div className="row">
              <div className="col-10">
                <form class="d-flex" role="search">
                  <div className="col-9 mx-auto">
                    <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                  </div>
                  <div className="col-2 mx-auto">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                  </div>
                </form>
              </div> 
              <div class="col-2">
                <DropdownButton id="dropdown-basic-button" title="Filtros">
                  <Dropdown.Item href="#/action-1">Clases Programdas</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Habilidades</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Usuarios</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-left">Clases Programadas</h3>
          </div>
        </div>
        <div className="row flex-nowrap overflow-auto">
          {cardsScheduledClasses.map(card => (
            <div key={card.title} className="col-12 col-md-6 mb-4">
              <Card className={card.className} title={card.title} content={card.date} imageUrl={card.imageUrl}/>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-left">Aprende Nuevas Habilidades</h3>
          </div>
        </div>
        <div className="row flex-nowrap overflow-auto">
          {cardsLearnNewSkills.map(card => (
            <div key={card.title} className="col-12 col-md-2 mb-4">
              <Card className={card.className} title={card.title} content={''} imageUrl={card.imageUrl}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}