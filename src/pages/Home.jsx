import Button from "../components/Button";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import { getPlots } from "../api";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Home() {
  const [plots, setPlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        <Button text={"Find your Plot"} />
      </section>
      {isLoading && <Loader loading="...loading" />}
      {error && (
        <Error
          error={`There was an error "${error.message}".`}
        />
      )}
      {!isLoading && !error  && <Carousel text={text} image={images} />}
    </section>
  );
}
