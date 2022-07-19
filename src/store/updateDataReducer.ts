import { StateType, NewsItemType, CommentsItemType } from '../types/types';
import { ActionType, Action } from '../types/action';

const REQUIRED_COUNT_OF_NEWS_ITEM = 100;

const defaultState: StateType = {
  news: [],
  comments: [],
};

export const updateDataReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ActionType.ADD_NEWS: {
      const newState = { ...state };
      if (action.payload) {
        newState?.news?.push(...action.payload);
      }

      if (newState.news && newState.news.length > REQUIRED_COUNT_OF_NEWS_ITEM) {
        const newArrayNews = newState.news
          .filter((item, index) => newState.news.indexOf(item) === index)
          .sort(function (a: NewsItemType, b: NewsItemType): number {
            if (a.time && b.time) return b.time - a.time;
            else return Number(null);
            // return b?.time - a?.time;
          })
          .slice(0, 100);
        return { ...newState, news: newArrayNews };
      }

      return { ...newState };
    }

    case ActionType.DELETE_NEWS: {
      return {
        news: [],
        comments: [],
      };
    }

    case ActionType.UPDATE_COMMENTS: {
      const newState = { ...state };
      if (action.payload) {
        newState.comments = action.payload;
      }

      return newState;
    }

    case ActionType.DELETE_COMMENTS: {
      return defaultState;
    }

    default:
      return state;
  }
};

export function addNewsAction(payload: Array<NewsItemType>): Action {
  return { type: ActionType.ADD_NEWS, payload };
}

export function deleteNewsAction(): Action {
  return { type: ActionType.DELETE_NEWS };
}

export function updateCommentsAction(payload: Array<CommentsItemType>): Action {
  return { type: ActionType.UPDATE_COMMENTS, payload };
}

export function deleteCommentsAction(): Action {
  return { type: ActionType.DELETE_COMMENTS };
}
