import React from 'react';
import ReactDOM from 'react-dom';
import "@/assets/css/reset.css";
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);
