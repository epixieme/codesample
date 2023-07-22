import { Link } from "react-router-dom";

export default function CarouselButton({ btnText, onClick, className }) {
  return <button className={className} onClick={onClick}>{btnText}</button>;
}
