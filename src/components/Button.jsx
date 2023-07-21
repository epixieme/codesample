import { NavHashLink } from "react-router-hash-link";

export default function Button({ text, anchor }) {
  return (
    <button>
      <NavHashLink to={`/plots${anchor}`}>{text}</NavHashLink>
    </button>
  );
}
