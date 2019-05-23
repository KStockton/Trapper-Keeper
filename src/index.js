import React from 'react';
import {render} from 'react-dom';
import './Sass/index.scss';
import * as serviceWorker from './serviceWorker';
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './Reducers/index'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

import App from './components/App'

const store = createStore(rootReducer)



render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
)
const store = createStore( rootReducer, composeWithDevTools())

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)



render(router , document.getElementById('root'));

serviceWorker.unregister();
