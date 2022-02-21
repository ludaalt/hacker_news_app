import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';

import store from './store/store';
import './index.css';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-position: inside;
  }

  li {
    margin: 0 10px 0 40px;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
