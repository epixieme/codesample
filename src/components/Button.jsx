
import { Link } from "react-router-dom";

export default function Button({btnText, route,onClick}) {
  return (
    <button>
      <Link to={route} onClick={onClick}>{btnText}</Link>
    </button>
  );
}
