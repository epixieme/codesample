import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({ btnText, route, onClick }) {
  Button.propTypes = {
    btnText: PropTypes.string,
    route: PropTypes.string,
    onClick: PropTypes.func,
  };
  return (
    <button>
      <Link to={route} onClick={onClick}>
        {btnText}
      </Link>
    </button>
  );
}
