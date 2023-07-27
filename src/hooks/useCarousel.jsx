import { useState } from "react";

const useCarousel = (arrayLength) => {

  /* created 2 states so if isMobile it uses currentMobileSlide */

  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const [currentDesktopSlide, setCurrentDesktopSlide] = useState(0);

  function nextSlide() {
    if (currentMobileSlide < arrayLength) {
      setCurrentMobileSlide(currentMobileSlide + 1);
    }

    if (currentDesktopSlide < arrayLength) {
      setCurrentDesktopSlide(currentDesktopSlide + 1);
    }
  }

  function previousSlide() {
    if (currentDesktopSlide > 0) {
      setCurrentDesktopSlide(currentDesktopSlide - 1);
    }

    if (currentMobileSlide > 0) {
      setCurrentMobileSlide(currentMobileSlide - 1);
    }
  }

  return {
    currentMobileSlide,
    currentDesktopSlide,
    nextSlide,
    previousSlide,
  };
};

export default useCarousel;
