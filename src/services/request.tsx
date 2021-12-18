import { addNewsAction } from '../store/addNewsReducer';
import { Dispatch } from 'redux';

// const arrayOfNews: Array<NewsItem> = [];

// type NewsItem = {
//   id?: number;
//   title?: string;
//   points?: number;
//   user?: string;
//   time?: Date;
//   timeAgo?: string;
//   commentsCount?: number;
//   type?: string;
//   url?: string;
//   domain?: string;
// };

const PAGES_COUNT = 4;

export const getNews = () => {
  // const response = await fetch(`https://api.hnpwa.com/v0/news/${page}.json`);
  // const data: any = await response.json();

  return (dispatch: Dispatch) => {
    for (let i = 1; i <= PAGES_COUNT; i += 1) {
      fetch(`https://api.hnpwa.com/v0/news/${i}.json`)
        .then((response) => response.json())
        .then((json) => dispatch(addNewsAction(json)));
    }
  };

  // data.forEach((item: any) => {
  //   const obj: NewsItem = {};
  //   obj.title = item.title;
  //   obj.points = item.points;
  //   obj.user = item.user;
  //   obj.time = item.time;

  //   arrayOfNews.push(obj);
  // });
};
