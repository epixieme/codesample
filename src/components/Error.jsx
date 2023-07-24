import PropTypes from "prop-types";

export default function Error({ error }) {
  Error.propTypes = {
    error: PropTypes.string,
  };
  return (
    <div
      style={
        error && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }
      }
    >
      <h1>{error}</h1>
    </div>
  );
}
