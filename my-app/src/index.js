import React from 'react';
import App from "./App";
import * as serviceWorker from './serviceWorker';
let ReactDOM = require('react-dom');



// class MyComponent extends React.Component {
//   render() {
//     return <div>Hello World</div>;
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

//
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


