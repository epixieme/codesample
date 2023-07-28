import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth)

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);

  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    //cleanup, would just keep updating the state otherwise
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
