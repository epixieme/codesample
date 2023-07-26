import { useState } from "react";

const useCarousel = (arrayLength,num) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide < arrayLength) {
      setCurrentSlide(currentSlide + num);
    }
  }

  function previousSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - num);
    }
  }

  return {
    currentSlide,
    nextSlide,
    previousSlide,
  };
};

export default useCarousel;
