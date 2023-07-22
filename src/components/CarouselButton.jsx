import { Link } from "react-router-dom";

export default function CarouselButton({ btnText, onClick }) {
  return <button onClick={onClick}>{btnText}</button>;
}
