import React from 'react';

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <li className="dropdown-item" key={option.value} >
        {option.label}
      </li>
    );
  });

  return (
    <div className="dropdown">
      <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle='dropdown' aria-expanded='false'>
        Your Choice
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {renderedOptions}
      </ul>
    </div>
  );
};

export default Dropdown
