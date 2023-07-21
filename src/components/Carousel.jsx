import useCarousel from "../hooks/useCarousel";

import useWindowWidth from "../hooks/useWindowWidth";

export default function Carousel({ text, image }) {
  const carousel = useCarousel();
  const screenWidth = useWindowWidth();

  const displaySlideScreens = () =>
    screenWidth < 800 ? (
      <section className="carousel-container-elements">
        <img src={image[carousel.currentScreen]} />
        <p>{text[carousel.currentScreen]}</p>
      </section>
    ) : (
      <section className="carousel-container-elements">
        <img src={image[carousel.currentScreen]} />
        <img src={image[carousel.currentScreen + 1]} />
        <img src={image[carousel.currentScreen + 2]} />
        <p>{text[carousel.currentScreen]}</p>
        <p>{text[carousel.currentScreen + 1]}</p>
        <p>{text[carousel.currentScreen + 2]}</p>
      </section>
    );

  return (
    <section className="carousel-container">
      {displaySlideScreens()}
      <section className="carousel-buttons">
        <button onClick={carousel.previousScreen}>previousScreen</button>
        <button onClick={carousel.nextScreen}>next screen</button>
      </section>
    </section>
  );
}
