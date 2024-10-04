export function CarouselIndicators({ slides }) {
  return (
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
          aria-current={index === 0 ? "true" : "false"}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
}
