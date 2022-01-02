// import { ActionType } from './actionType';

export interface AppProps {
  news?: Array<NewsItemType>;
  comments?: Array<object>;
  buttonFunction?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

export interface StateType {
  arrayNews?: Array<NewsItemType>;
  arrayComments?: Array<CommentsItemType>;
}

export interface ButtonType {
  title?: string;
  buttonFunction?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

export interface NewsItemType {
  id?: number;
  title?: string;
  url?: string;
  points?: number;
  user?: string;
  time?: number;
  commentsCount?: number;
}

export interface CommentsItemType {
  id?: number;
  title?: string;
  points?: number;
  user?: string;
  time?: number;

  content?: string;
  comments?: Array<CommentsItemType>;
}
