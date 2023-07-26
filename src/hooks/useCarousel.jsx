import { useState } from "react";
import useWindowWidth from "./useWindowWidth";
const useCarousel = (arrayLength) => {

  const [currentDesktopSlide, setCurrentDesktopSlide] = useState(0);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  
  const screenSize = useWindowWidth()

  const isMobile =  screenSize < 800

  /* use state dependant on screensize */
  const screenSlide = isMobile? currentMobileSlide : currentDesktopSlide
 
  function nextSlide() {
    if (screenSlide  < arrayLength) {
      setCurrentDesktopSlide(currentDesktopSlide + 3);
      setCurrentMobileSlide(currentMobileSlide + 1);
    }
  }

  function previousSlide() {
    if (screenSlide > 0) {
      setCurrentDesktopSlide(currentDesktopSlide - 3);
      setCurrentMobileSlide(currentMobileSlide - 1);
    }
  }

  return {
    currentDesktopSlide,
    currentMobileSlide,
    nextSlide,
    previousSlide,
  };
};

export default useCarousel;
