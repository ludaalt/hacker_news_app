import { addNewsAction } from '../store/updateNewsReducer';
import { Dispatch } from 'redux';

const PAGES_COUNT = 4;

export const getNews = () => {
  return (dispatch: Dispatch) => {
    for (let i = 1; i <= PAGES_COUNT; i += 1) {
      fetch(`https://api.hnpwa.com/v0/news/${i}.json`)
        .then((response) => response.json())
        .then((json) => dispatch(addNewsAction(json)));
    }
  };
};
