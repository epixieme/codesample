import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth)

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);

  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
   //cleanup
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
