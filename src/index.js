import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const element = React.createElement('h1', null, 'Hello World!');
// const element = <h1 className="heading">Hello world {new Date()}!</h1>;
// const name = 'Rahim';
// const index = 0;
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
// const element = <h1>Hello World {1+5} and name is {name}</h1>;

// const element2 = (
//     <h1 className='heading' tabIndex={index}>
//         HI, HOW ARE YOU?
//     </h1>
// );
// function tick() {
//     const element3 = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     root.render(element3);
//   }

// function Clock({locale}) {
//   return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString(locale)}.</h2>
//       </div>
//   );
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }




// root.render(<Clock locale="bn-BD" />);
// root.render(<Clock locale="bn-BD" area="Dhaka" />);
// root.render(
//   <React.StrictMode>
//     <Home />
//     <Clock locale="bn-BD" area="Dhaka" />
//   </React.StrictMode>
// );
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  
// setInterval(tick, 1000);
// console.log(element);
// console.log(element2);
// ReactDOM.render(element, document.getElementById('root'));
// root.render(element2);

// React Element return following object
/*
  element = {
    type: 'h1',
    props: {
      className: 'heading',
      tabIndex: 0,
      children: {
        type: 'h1'
      }
    }
  }
*/