import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './store/store';
import './index.css';
import App from './App';

import { updateNews } from './services/updateNews';
import { getNews } from './services/getNews';

const mapStateToProps = (state: any) => {
  const { comments } = state;
  return comments;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    buttonFunction: () => {
      dispatch(updateNews());
      dispatch(getNews());
      console.log('btn');
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);
