import PropTypes from "prop-types";

export default function CarouselButton({ btnText, onClick, className }) {
  CarouselButton.propTypes = {
    btnText: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };
  return (
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
}
