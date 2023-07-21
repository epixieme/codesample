import { useEffect, useState } from "react";
import { getPlots } from "../api";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Plots() {
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

  const plotElements = plots.map((plot) => (
    <div key={plot.id} className="plot-card">
      <img src={plot.imageUrl} />
      <div className="plot-info">
        <h3>{plot.name[0].toUpperCase() + plot.name.substring(1)}</h3>
        <p>
          £{plot.price}
          <span>/month</span>
        </p>
      </div>
      <i className={`plot-condition ${plot.condition}`}>
        {plot.condition.replace("-", " ")}
      </i>
    </div>
  ));

  return (
    <section className="plots-container" id="plotAnchor">
      <div className="plot-list">
        <h1>Explore our plots </h1>
        <section className="plot-card-container">{plotElements}</section>
        {isLoading && <Loader loading="...loading" />}
        {error && <Error error={`There was an error "${error.message}".`} />}
      </div>
    </section>
  );
}

