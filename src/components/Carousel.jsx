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

  const displaySlideScreens = () =>
    screenWidth < 800 ? (
      <section className="carousel-container-elements">
        <img src={image[currentScreen]} />
        <p>{text[currentScreen]}</p>
      </section>
    ) : (
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
      {displaySlideScreens()}
      <section className="carousel-buttons">
        <CarouselButton onClick={previous} btnText={prevText} />
        <CarouselButton onClick={next} btnText={nextText} />
      </section>
    </section>
  );
}
