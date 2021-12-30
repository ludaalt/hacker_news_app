// import { ActionType } from './actionType';

export interface StateType {
  arrayNews?: any;
  arrayComments?: any;
}

export interface ButtonType {
  title?: string;
  buttonFunction?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

export interface NewsItemType {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  commentsCount: number;
  url: string;
}

export interface CommentsItemType {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;

  content: string;
  comments: Array<Comment>;
}

export interface Comment {
  id: number;
  user: string;
  time: number;
  content: string;
}

export interface AppProps {
  news?: Array<NewsItemType>;
  comments?: Array<object>;
  buttonFunction?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}
