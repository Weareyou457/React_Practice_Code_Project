import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';

// const ReactElement = {
//   type :'a',
//   props:{
//       herf :"https://goggle.com",
//       target : "_blank"
//   },
//   children :'click me to visit Goggle'
// }

// const anotherElement = {
//   <a href="https://goggle.com" target='_blank'> visit to goggle</a>
// }

const anotherUser = "chai or code"

const reactElement = React.createElement(  //bbael
  'a',

  {href : "goggle.com",target: "_blank"},

  //evaluated sath me aata hai 

  "click me to visit goggle",
  anotherUser //enaluted expression
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  // ReactElement
    // <App />
    reactElement
 
);

