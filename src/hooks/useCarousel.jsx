import { useState } from "react";

const useCarousel = (arrayLength) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  function nextScreen() {
    if (currentScreen < arrayLength) {
      setCurrentScreen(currentScreen + 1);
    }
  }

  function previousScreen() {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  }

  return {
    currentScreen,
    nextScreen,
    previousScreen,
  };
};

export default useCarousel;
