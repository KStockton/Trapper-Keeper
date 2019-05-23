import React from 'react';
import {render} from 'react-dom';
import './Sass/index.scss';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './Reducers/index'


const store = createStore( rootReducer, composeWithDevTools())

const router = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)


render(router , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
