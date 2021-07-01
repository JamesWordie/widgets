import React, { useState } from 'react';
// useState => gives access to state inside of a functional component

const Accordion = ({ items }) => {
  // array destructuring ie setting both == to useState(null)
  // activeIndex = peice of state, function to set piece of state, null is initial value of state
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(index);
    // console.log('Title clicked', index)
  };

  const renderedItems = items.map((item, index) => {
    const show = index === activeIndex ? 'show' : '';

    return (
      <div className="accordion-item" key={item.title}>
        <h2 className="accordion-header" id="headingOne" onClick={() => onTitleClicked(index)} >
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {item.title}
          </button>
        </h2>
        <div id="collapseOne" className={`accordion-collapse collapse ${show}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            {item.content}
          </div>
        </div>
      </div>
    );
  })

  return (
    <div className="accordion" id="accordionExample">
      {renderedItems}
    </div>
  );
};

export default Accordion;
