import { useEffect, useState } from 'react';

// children due to passing a fucntion as a prop from App.jsx in route

const Route = ({ path, children }) => {
  // need this state to prevent page reloading completely but to allow the route component to rerender
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []);

  return currentPath === path
    ? children
    : null;
};

export default Route;
