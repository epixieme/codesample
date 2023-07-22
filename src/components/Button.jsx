
import { Link } from "react-router-dom";

export default function Button({btnText}) {
  return (
    <button>
      <Link to="/plots">{btnText}</Link>
    </button>
  );
}
