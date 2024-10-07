export function CarouselItem({ title, content, buttonText, buttonLink, imageUrl, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img 
        src={imageUrl} 
        className="d-block w-100" 
        alt={title}
        style={{ objectFit: 'cover', height: '400px' }} // Ajusta la altura según tus necesidades
      />
      <div className="container">
        <div className="carousel-caption text-start">
          <h1>{title}</h1>
          <p className="opacity-75">{content}</p>
          <p><a className="btn btn-lg btn-primary" href={buttonLink}>{buttonText}</a></p>
        </div>
      </div>
    </div>
  );
}
