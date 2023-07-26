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
  currentDesktopSlide,
  currentMobileSlide,
}) {
  Carousel.propTypes = {
    text: PropTypes.array,
    image: PropTypes.array,
    previous: PropTypes.func,
    next: PropTypes.func,
    prevText: PropTypes.string,
    nextText: PropTypes.string,
    currentDesktopSlide: PropTypes.number,
    currentMobileSlide: PropTypes.number,
  };

  const screenWidth = useWindowWidth();
  const isMobile = screenWidth < 800;

  // index uses props for currentMobileSlide state
  const mobileDisplay = (
    <section className="carousel-container-elements">
      <img src={image[currentMobileSlide]} />
      <p>{text[currentMobileSlide]}</p>
    </section>
  );

   /*  index uses props for currentDesktopSlide state */
  const desktopDisplay = (
    <section className="carousel-container-elements">
      <img src={image[currentDesktopSlide]} />
      <img src={image[currentDesktopSlide + 1]} />
      <img src={image[currentDesktopSlide + 2]} />
      <p>{text[currentDesktopSlide]}</p>
      <p>{text[currentDesktopSlide + 1]}</p>
      <p>{text[currentDesktopSlide + 2]}</p>
    </section>
  );

  /* set length of image array dependant on mobile or desktop */
  const numberOfSlides = () => {
    const showMobileSlideCount = image.length - 1;
    const showDesktopSlideCount = image.length / 2 - 3;
    return isMobile ? showMobileSlideCount : showDesktopSlideCount;
  };

   /*   mobile or desktop slide state */

  const screenSlides = currentMobileSlide || currentDesktopSlide;

  return (
    <section className="carousel-container">
      {isMobile ? mobileDisplay : desktopDisplay}
      <section className="carousel-buttons">
        <CarouselButton
          onClick={previous}
          btnText={prevText}
          className={screenSlides > 0 ? "visible" : "invisible"}
        />
        <CarouselButton
          onClick={next}
          btnText={nextText}
          className={screenSlides < numberOfSlides() ? "visible" : "invisible"}
        />
      </section>
    </section>
  );
}
