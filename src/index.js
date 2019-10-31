import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout.js';
import "./index.css";



// function welcome() {
//   const element = document.createElement('h1');
//   element.innerHTML = _.join(['Welcome webpack', "and", "React"], ' ');

//   return element;
// }


  ReactDOM.render(<Layout />, document.getElementById('app'));
  // document.body.appendChild(welcome());

