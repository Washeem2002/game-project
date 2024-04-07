import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const ResetScroll = ({ children }) => {
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    // Check if the route has changed
    if (location.pathname !== prevLocation.current.pathname) {
      window.scrollTo(0, 0);
    }

    // Update the previous location to the current one
    prevLocation.current = location;
  }, [location]);

  return <>{children}</>;
};

export default ResetScroll;
