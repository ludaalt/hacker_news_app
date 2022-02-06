import { NewsItemType, CommentsItemType } from './types';

export enum ActionType {
  /* eslint-disable */
  ADD_NEWS = 'ADD_NEWS',
  DELETE_NEWS = 'DELETE_NEWS',
  UPDATE_COMMENTS = 'UPDATE_COMMENTS',
  DELETE_COMMENTS = 'DELETE_COMMENTS',
  /* eslint-enable */
}

export interface addNewsActionType {
  type: ActionType.ADD_NEWS;
  payload?: Array<NewsItemType> | undefined;
}

interface deleteNewsAction {
  type: ActionType.DELETE_NEWS;
  payload?: [];
}

interface updateCommentsAction {
  type: ActionType.UPDATE_COMMENTS;
  payload?: Array<CommentsItemType>;
}

interface deleteCommentsAction {
  type: ActionType.DELETE_COMMENTS;
  payload?: [];
}

export type Action =
  | addNewsActionType
  | deleteNewsAction
  | updateCommentsAction
  | deleteCommentsAction;
