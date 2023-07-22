import { useEffect, useState } from "react";

import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";
import Error from "../components/Error";
import useCarousel from "../hooks/useCarousel";

import { getPlots } from "../api";

export default function Home() {
  const [plots, setPlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const carousel = useCarousel();

  useEffect(() => {
    async function loadPlots() {
      setIsLoading(true);
      try {
        const data = await getPlots();
        setPlots(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadPlots();
  }, []);

  /// look at this code

  // const firstThreePlots = plots.map(item=>[item,item,item])
  // console.log(firstThreePlots)

  const text = plots.map((item) => item.name);
  const images = plots.map((item) => item.imageUrl);
  
  return (
    <section>
      <section className="home-container">
        <h1>
          Do you live in a place with no garden and want to grow your own
          produce?
        </h1>
        <p>Join the movement and find a plot that you can rent nearby</p>
        <Button btnText={"Find your Plot"} route="/plots"/>
      </section>
      {isLoading && <Loader loading="...loading" />}
      {error && <Error error={`There was an error "${error.message}".`} />}
      {!isLoading && !error && (
        <Carousel
          text={text}
          image={images}
          previous={carousel.previousScreen}
          prevText="Previous Screen"
          next={carousel.nextScreen}
          nextText="Next Screen"
          currentScreen={carousel.currentScreen}
        />
      )}
    </section>
  );
}
