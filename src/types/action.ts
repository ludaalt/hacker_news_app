import { NewsItemType, CommentsItemType } from './types';

export enum ActionType {
  /* eslint-disable */
  ADD_NEWS = 'ADD_NEWS',
  DELETE_NEWS = 'DELETE_NEWS',
  UPDATE_COMMENTS = 'UPDATE_COMMENTS',
  DELETE_COMMENTS = 'DELETE_COMMENTS',
  CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS',
  /* eslint-enable */
}

export interface addNewsActionType {
  type: ActionType.ADD_NEWS;
  payload?: Array<NewsItemType>;
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

interface changeLoadingStatus {
  type: ActionType.CHANGE_LOADING_STATUS;
  payload: boolean;
}

export type Action =
  | addNewsActionType
  | deleteNewsAction
  | updateCommentsAction
  | deleteCommentsAction
  | changeLoadingStatus;
