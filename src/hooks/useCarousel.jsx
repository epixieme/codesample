import { useState } from "react";

const useCarousel = (arrayLength) => {

  //adds or subtracts 1
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide < arrayLength) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function previousSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return {
    currentSlide,
    nextSlide,
    previousSlide,
  };
};

export default useCarousel;
