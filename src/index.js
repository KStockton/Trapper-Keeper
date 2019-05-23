import React from 'react';
import {render} from 'react-dom';
import './Sass/index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './Reducers/index'
import App from './Components/App/App'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore( rootReducer, composeWithDevTools())

render(
  <Provider store={ store } >
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
