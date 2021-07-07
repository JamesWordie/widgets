import React from 'react';
import Link from './link';

const Header = () => {
  return (
    <ul className="nav justify-content-evenly my-5">
      <li className="nav-item">
        <Link
          className='nav-link btn btn-outline-success'
          style={{ color: 'black' }}
          href="/">Accordion
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className='nav-link btn btn-outline-success'
          style={{ color: 'black' }}
          href="/list">Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className='nav-link btn btn-outline-success'
          style={{ color: 'black' }}
          href="/dropdown">Dropdown
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className='nav-link btn btn-outline-success'
          style={{ color: 'black' }}
          href="/translate">Translate
        </Link>
      </li>
    </ul>
  );
};

export default Header;
