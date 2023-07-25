import PropTypes from "prop-types";
import useWindowWidth from "../hooks/useWindowWidth";
import CarouselButton from "./CarouselButton";

export default function Carousel({
  text,
  image,
  previous,
  next,
  prevText,
  nextText,
  currentScreen,
}) {
  Carousel.propTypes = {
    text: PropTypes.array,
    image: PropTypes.array,
    previous: PropTypes.func,
    next: PropTypes.func,
    prevText: PropTypes.string,
    nextText: PropTypes.string,
    currentScreen: PropTypes.number,
  };

  const screenWidth = useWindowWidth();
  const isMobile = screenWidth < 800;

  const mobileDisplay = (
    <section className="carousel-container-elements">
      <img src={image[currentScreen]} />
      <p>{text[currentScreen]}</p>
    </section>
  );

  const desktopDisplay = (
    <section className="carousel-container-elements">
      <img src={image[currentScreen]} />
      <img src={image[currentScreen + 1]} />
      <img src={image[currentScreen + 2]} />
      <p>{text[currentScreen]}</p>
      <p>{text[currentScreen + 1]}</p>
      <p>{text[currentScreen + 2]}</p>
    </section>
  );

  const numberOfScreens = () => {
    const mobileScreenCount = image.length - 1;
    const desktopScreenCount = image.length - 3;
    return isMobile ? mobileScreenCount : desktopScreenCount;
  };

  return (
    <section className="carousel-container">
      {isMobile ? mobileDisplay : desktopDisplay}
      <section className="carousel-buttons">
        <CarouselButton
          onClick={previous}
          btnText={prevText}
          className={currentScreen > 0 ? "visible" : "invisible"}
        />
        <CarouselButton
          onClick={next}
          btnText={nextText}
          className={
            currentScreen < numberOfScreens() ? "visible" : "invisible"
          }
        />
      </section>
    </section>
  );
}
