import PropTypes from "prop-types";

export default function Loader({ loading }) {
  Loader.propTypes = {
    loading: PropTypes.string,
  };
  return (
    <section className="Loader-container">
      <section className="spinner-container">
        <section className="loading-spinner">
          <h1>{loading}</h1>›
        </section>
      </section>
    </section>
  );
}
