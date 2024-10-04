import { useState, useEffect } from 'react';

export function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Cambia de slide cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  if (!slides || slides.length === 0) {
    return null; // No renderizar nada si no hay slides
  }

  return (
    <div id="myCarousel" className="carousel slide mb-6">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? "active" : ""}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <img 
              src={slide.imageUrl} 
              className="d-block w-100" 
              alt={slide.title}
              style={{ objectFit: 'cover', height: '400px' }}
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>{slide.title}</h1>
                <p className="opacity-75">{slide.content}</p>
                <p><a className="btn btn-lg btn-primary" href={slide.buttonLink}>{slide.buttonText}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

