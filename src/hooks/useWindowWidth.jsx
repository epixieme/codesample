import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
