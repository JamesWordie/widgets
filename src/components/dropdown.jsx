import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  // useEffect(() => {
  //   document.body.addEventListener(
  //     "click",
  //     (event) => {
  //       // if event.target ie where we clicked is inside of the component element
  //       if (ref.current.contains(event.target)) {
  //         return;
  //       }
  //       setOpen(false);
  //     },
  //     { capture: true }
  //   );
  // }, []);
  useEffect(() => {
    const onBodyClick = (event) => {
      // if event.target ie where we clicked is inside of the component element
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    };

    return (
      // <li
      //   className="dropdown-item"
      //   key={option.value}
      //   onClick={() => onSelectedChange(option)}
      // >
      //   {option.label}
      // </li>
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    // <div>
    //   <h1 className="text-center my-4">
    //     Pick Your Colour
    //   </h1>
    //   <div className="dropdown">
    //     <button className="btn btn-success dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle='dropdown' aria-expanded='false'>
    //       {selected.label}
    //     </button>
    //     <ul className="dropdown-menu w-100 text-center" aria-labelledby="dropdownMenuButton1">
    //       {renderedOptions}
    //     </ul>
    //   </div>
    // </div>
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Pick a Colour</label>
        <div
          onClick={(() => setOpen(!open))}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown


// the commented out code is using bootstrap where the toggle option for clicking off of the dropdown already works
// ie if you click on another part of the page it will shut
// however to learn about useRef I have used sematic ui using and following along with tutorial
