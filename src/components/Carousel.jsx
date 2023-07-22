import useCarousel from "../hooks/useCarousel";
import Button from "./Button";

import useWindowWidth from "../hooks/useWindowWidth";

export default function Carousel({ text, image, previous,next, prevText, nextText}) {
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
        <Button  onClick={previous} btnText={prevText} />
        <Button  onClick={next} btnText={nextText}/>
      </section>
    </section>
  );
}
