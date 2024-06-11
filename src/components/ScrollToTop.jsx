import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // If you're using react-router

const ScrollToTop = () => {
  const location = useLocation(); // This will get the location object from react-router

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // This will trigger the scroll every time the location changes

  return null; // This component does not render anything
};

export default ScrollToTop;
