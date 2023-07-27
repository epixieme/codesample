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
  currentMobileSlide,
  currentDesktopSlide,
}) {
  Carousel.propTypes = {
    text: PropTypes.array,
    image: PropTypes.array,
    previous: PropTypes.func,
    next: PropTypes.func,
    prevText: PropTypes.string,
    nextText: PropTypes.string,
    currentMobileSlide: PropTypes.number,
    currentDesktopSlide: PropTypes.number,
  };

  const screenWidth = useWindowWidth();
  const isMobile = screenWidth < 800;

  /*  index uses props for currentMobileSlide state */
  const mobileDisplay = () => {
    return (
      <section className="carousel-container-elements">
        <img src={image[currentMobileSlide]} />
        <p>{text[currentMobileSlide]}</p>
      </section>
    );
  };

  //  index uses props for currentdesktopslide state
  const desktopDisplay = () => {
    return (
      <section className="carousel-container-elements">
        <img src={image[currentDesktopSlide]} />
        <img src={image[currentDesktopSlide + 1]} />
        <img src={image[currentDesktopSlide + 2]} />
        <p>{text[currentDesktopSlide]}</p>
        <p>{text[currentDesktopSlide + 1]}</p>
        <p>{text[currentDesktopSlide + 2]}</p>
      </section>
    );
  };

  const currentSlideNumber = isMobile
    ? currentMobileSlide
    : currentDesktopSlide;
  const slidesLength = isMobile ? image.length - 3 : image.length - 3;

  return (
    <section className="carousel-container">
      {isMobile ? mobileDisplay() : desktopDisplay()}
      <section className="carousel-buttons">
        <CarouselButton
          onClick={previous}
          btnText={prevText}
          className={currentSlideNumber > 0 ? "visible" : "invisible"}
        />
        <CarouselButton
          onClick={next}
          btnText={nextText}
          className={
            currentSlideNumber < slidesLength ? "visible" : "invisible"
          }
        />
      </section>
    </section>
  );
}
