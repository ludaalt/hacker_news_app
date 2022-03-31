import { addNewsAction } from '../store/updateDataReducer';
import { changeLoadingStatus } from '../store/updateLoadingReducer';
import { Dispatch } from 'redux';
import { Action } from '../types/action';

const PAGES_COUNT = 4;

export const getNews = (): unknown => {
  const urls = [];
  for (let i = 1; i <= PAGES_COUNT; i += 1) {
    urls.push(`https://api.hnpwa.com/v0/news/${i}.json`);
  }
  const requests = urls.map((url) => fetch(url));

  return (dispatch: Dispatch<Action>) => {
    setTimeout(() => {
      Promise.all(requests)
        .then((responses) => Promise.all(responses.map((response) => response.clone().json())))
        .then((jsons) => jsons.forEach((json) => dispatch(addNewsAction(json))));
      dispatch(changeLoadingStatus(false));
    }, 100);
  };
};
