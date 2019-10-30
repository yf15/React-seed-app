import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation.js';
import "./index.css";

function welcome() {
  const element = document.createElement('h1');
  element.innerHTML = _.join(['Welcome webpack', "and", "React"], ' ');

  return element;
}

  
  ReactDOM.render(<Navigation />, document.getElementById('app'));
  document.body.appendChild(welcome());