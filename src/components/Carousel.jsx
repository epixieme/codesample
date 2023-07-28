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
  currentSlide,
}) {
  Carousel.propTypes = {
    text: PropTypes.array,
    image: PropTypes.array,
    previous: PropTypes.func,
    next: PropTypes.func,
    prevText: PropTypes.string,
    nextText: PropTypes.string,
    currentSlide: PropTypes.number,
  };

  const screenWidth = useWindowWidth();
  const isMobile = screenWidth < 800;

  //could have created components fpr mobileDisplay and desktopDisplay

  /*  index uses props for currentMobileSlide state */
  const mobileDisplay = () => {
    return (
      <section className="carousel-container-elements">
        <img src={image[currentSlide]} />
        <p>{text[currentSlide]}</p>
      </section>
    );
  };

  //  index uses props for currentSlide state
  const desktopDisplay = () => {
    return (
      <section className="carousel-container-elements">
        <img src={image[currentSlide]} />
        <img src={image[currentSlide + 1]} />
        <img src={image[currentSlide + 2]} />
        <p>{text[currentSlide]}</p>
        <p>{text[currentSlide + 1]}</p>
        <p>{text[currentSlide + 2]}</p>
      </section>
    );
  };

  const currentSlideNumber = currentSlide
  const slidesLength = isMobile ? image.length - 3: image.length - 3;

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
