import { addNewsAction } from '../store/updateNewsReducer';
import { Dispatch } from 'redux';

import { Action } from '../types/action';

const PAGES_COUNT = 4;
const urls = [];

for (let i = 1; i <= PAGES_COUNT; i += 1) {
  urls.push(`https://api.hnpwa.com/v0/news/${i}.json`);
}

const requests = urls.map((url) => fetch(url));

export const getNews = (): unknown => {
  return (dispatch: Dispatch<Action>) => {
    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((response) => response.json())))
      .then((jsons) => jsons.forEach((json) => dispatch(addNewsAction(json))));
  };
};
