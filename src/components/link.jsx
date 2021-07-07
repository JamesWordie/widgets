import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // boolean value for cmd or ctrl key for clicking and open in a new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    };

    event.preventDefault();
    window.history.pushState({}, '', href); // built in function to change the url

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href} >
      {children}
    </a>
  );
};

export default Link;
