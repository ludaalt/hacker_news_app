import { NewsItemType, CommentsItemType } from './types';

interface addNewsAction {
  // type: ActionType.ADD_NEWS;
  type: string;
  payload: Array<NewsItemType>;
}

interface deleteNewsAction {
  // type: ActionType.DELETE_NEWS;
  type: string;
  payload?: [];
}

interface updateCommentsAction {
  // type: ActionType.UPDATE_COMMENTS;
  type: string;
  payload: Array<CommentsItemType>;
}

interface deleteCommentsAction {
  // type: ActionType.DELETE_COMMENTS;
  type: string;
  payload?: [];
}

export type Action = addNewsAction | deleteNewsAction | updateCommentsAction | deleteCommentsAction;
