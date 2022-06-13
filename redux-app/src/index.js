import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {legacy_createStore as createStore} from 'redux' ;
import {Provider} from 'react-redux';
import {cartReducer} from './reduers/cardReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';

const store = createStore(cartReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
