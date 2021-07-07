// import React from 'react';

// children due to passing a fucntion as a prop from App.jsx in route

const Route = ({ path, children }) => {
  return window.location.pathname === path
    ? children
    : null;
};

export default Route;
