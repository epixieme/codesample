
import { Link } from "react-router-dom";

export default function Button({text}) {
  return (
    <button>
      <Link to="/plots">{text}</Link>
    </button>
  );
}
