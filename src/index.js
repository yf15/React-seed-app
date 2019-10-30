import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './reactApp.js';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  document.body.appendChild(component());