import React from 'react';
import Accordion from './accordion';

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

const items = [
  {
    title: 'What is react?',
    content: 'React is a front-end javascript framework.'
  },
  {
    title: 'Why use react?',
    content: 'React is a favourite js library among engineers.'
  },
  {
    title: 'How do you use reaact?',
    content: 'You use react by using multiple compoents pieced together.'
  }
];

export default () => {
  return (
    <div className="container my-5">
      <Accordion items={items} />
    </div>
  )
};
