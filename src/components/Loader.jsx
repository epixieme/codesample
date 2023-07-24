import PropTypes from "prop-types";

export default function Loader({ loading }) {
  Loader.propTypes = {
    loading: PropTypes.string,
  };
  return (
    <div className="Loader-container">
      <div className="spinner-container">
        <div className="loading-spinner">
          <h1>{loading}</h1>›
        </div>
      </div>
    </div>
  );
}
