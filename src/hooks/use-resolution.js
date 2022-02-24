import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useScreenResolution = () => {
  const [dimensions, setDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    let resizeTimer;
    function handleResize() {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(() => {
        setDimensions(getWindowDimensions());
      }, 200);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
};

export default useScreenResolution;
