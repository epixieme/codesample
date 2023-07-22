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
  const screenWidth = useWindowWidth();

  const smallScreen = () => (
    <section className="carousel-container-elements">
      <img src={image[currentScreen]} />
      <p>{text[currentScreen]}</p>
    </section>
  );

  const largeScreen = () => (
    <section className="carousel-container-elements">
      <img src={image[currentScreen]} />
      <img src={image[currentScreen + 1]} />
      <img src={image[currentScreen + 2]} />
      <p>{text[currentScreen]}</p>
      <p>{text[currentScreen + 1]}</p>
      <p>{text[currentScreen + 2]}</p>
    </section>
  );

  const displaySlideScreens = () =>
    screenWidth < 800 ? smallScreen() : largeScreen();

  return (
    <section className="carousel-container">
      {displaySlideScreens()}
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
            displaySlideScreens() && currentScreen < image.length / 2
              ? "visible"
              : "invisible"
          }
        />
      </section>
    </section>
  );
}
