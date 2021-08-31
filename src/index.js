import React from 'react';
import ReactDOM from 'react-dom';
// new imports start
// makes the Redux store available to any nested components that have been wrapped in the connect function
import { Provider } from "react-redux";

import configureStore from './store';
// new imports stop

import './index.css';

import App from './App';

// changed the render
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// changed the render