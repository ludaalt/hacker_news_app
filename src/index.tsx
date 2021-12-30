import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect, RootStateOrAny } from 'react-redux';

import store from './store/store';
import './index.css';
import App from './App';

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    news: state.news.arrayNews,
    comments: state.comments.arrayComments,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return {
//     buttonFunction: () => {
//       // dispatch(updateNews());
//       // dispatch(getNews());
//     },
//   };
// };

const Container = connect(mapStateToProps, null)(App);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);
