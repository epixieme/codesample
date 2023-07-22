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
  const mobile = screenWidth < 800;
  const numberOfScreens =  mobile ? image.length -1 : image.length/2;
  console.log(numberOfScreens)

  //could have used a logical operand or .hidden or hidden class - just feels more readable below

  const smallScreen = (
    <section className="carousel-container-elements">
      <img src={image[currentScreen]} />
      <p>{text[currentScreen]}</p>
    </section>
  );

  const largeScreen = (
    <section className="carousel-container-elements">
      <img src={image[currentScreen]} />
      <img src={image[currentScreen + 1]} />
      <img src={image[currentScreen + 2]} />
      <p>{text[currentScreen]}</p>
      <p>{text[currentScreen + 1]}</p>
      <p>{text[currentScreen + 2]}</p>
    </section>
  );


  

  return (
    <section className="carousel-container">
      {mobile ? smallScreen : largeScreen}
      <section className="carousel-buttons">
        <CarouselButton
          onClick={previous}
          btnText={prevText}
          className={currentScreen > 0 ? "visible" : "invisible"}
        />
        <CarouselButton
          onClick={next}
          btnText={nextText}
          className={currentScreen < numberOfScreens ? "visible" : "invisible"}
        />
      </section>
    </section>
  );
}
