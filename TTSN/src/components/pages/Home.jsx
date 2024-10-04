import { Carousel } from '../molecules/Carousel';

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

  return (
    <Carousel slides={carouselSlides} />
  );
}
