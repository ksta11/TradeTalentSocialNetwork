import './Home.css';
import { Carousel } from '../molecules/Carousel';
import { Card } from '../molecules/Card'; // Asumiendo que tienes un componente Card


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Home() {
  const carouselSlides = [
    {
      title: "Example headline.",
      content: "Some representative placeholder content for the first slide of the carousel.",
      buttonText: "Sign up today",
      buttonLink: "#",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Another example headline.",
      content: "Some representative placeholder content for the second slide of the carousel.",
      buttonText: "Learn more",
      buttonLink: "#",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "One more for good measure.",
      content: "Some representative placeholder content for the third slide of this carousel.",
      buttonText: "Browse gallery",
      buttonLink: "#",
      imageUrl: "https://via.placeholder.com/150"
    }
  ];

  const cardsScheduledClasses = [
    { className: "cards-scheduled-classes", title: "Card 1", date: "2024-01-01", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-scheduled-classes", title: "Card 2", date: "2024-01-02", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-scheduled-classes", title: "Card 3", date: "2024-01-03", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-scheduled-classes", title: "Card 4", date: "2024-01-04", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-scheduled-classes", title: "Card 5", date: "2024-01-05", imageUrl: "https://via.placeholder.com/150" },
    // Añade más cards según sea necesario
  ];

  const cardsLearnNewSkills = [
    { className: "cards-learn-new-skills", title: "Card 1", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 2", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 3", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 4", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 5", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 6", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 7", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 8", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 9", imageUrl: "https://via.placeholder.com/150" },
    { className: "cards-learn-new-skills", title: "Card 10", imageUrl: "https://via.placeholder.com/150" },
    // Añade más cards según sea necesario
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Carousel slides={carouselSlides} />
      <div className="container-fluid px-2 py-5">
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
            <div key={card.title} className="col-4 col-md-2 mb-4">
              <Card className={card.className} title={card.title} content={''} imageUrl={card.imageUrl}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
