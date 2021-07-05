import React, { useState } from 'react';
// import Accordion from './accordion';
// import Search from './search';
// import Dropdown from './dropdown';
import Translate from './translate';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className="text-center my-4">Hey There</h1>
//         <div className="d-flex justify-content-evenly align-items-center position-sticky" style={{ height: '100vh', top: '0' }}>
//           <i className="far fa-thumbs-up"></i>
//           <div className="spinner-grow text-primary" role="status">
//             <span className="visually-hidden"></span>
//           </div>
//         </div>
//       </div>
//     );
//   };
// }

// export default App;

// const items = [
//   {
//     title: 'What is react?',
//     content: 'React is a front-end javascript framework.'
//   },
//   {
//     title: 'Why use react?',
//     content: 'React is a favourite js library among engineers.'
//   },
//   {
//     title: 'How do you use reaact?',
//     content: 'You use react by using multiple compoents pieced together.'
//   }
// ];

// const options = [
//   {
//     label: 'A Touch of Red',
//     value: 'red'
//   },
//   {
//     label: 'A Hint of Green',
//     value: 'green'
//   },
//   {
//     label: 'A Shade of Blue',
//     value: 'blue'
//   }
// ]

const App = () => {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div className="container my-5">
      {/*<Accordion items={items} />*/}
      {/*<Search />*/}
{/*      <Dropdown
        label="Pick a Colour"
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
      <div>
        <h1 style={{ color: `${selected.value}` }}>
          Lorem, ipsum dolor, sit amet consectetur adipisicing elit.
          Amet illum dolor aliquam, praesentium non nihil veniam error optio
          temporibus accusantium sint minima necessitatibus alias dolores
          incidunt molestias voluptatem voluptate nesciunt.
        </h1>
      </div>*/}
      <Translate />
    </div>
  )
};

export default App;
