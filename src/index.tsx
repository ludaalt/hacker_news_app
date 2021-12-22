import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect, RootStateOrAny } from 'react-redux';

import store from './store/store';
import './index.css';
import App from './App';

import { updateNews } from './services/deleteNews';
import { getNews } from './services/getNews';

// type AppDispatch = typeof store.dispatch;

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    news: state.news.arrayNews,
    comments: state.comments.arrayComments,
  };
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
