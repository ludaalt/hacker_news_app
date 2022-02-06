export interface AppProps {
  news?: Array<NewsItemType>;
  comments?: Array<CommentsItemType>;
  page?: string;
  updateNews?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  updateComments?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

export interface StateType {
  arrayNews?: Array<NewsItemType> | undefined;
  arrayComments?: Array<CommentsItemType> | Array<CommentsItemType[] | undefined>;
}

export interface ButtonType {
  title?: string;
  onClick?: void;
}

export interface NewsItemType {
  id?: number;
  index?: number;
  title?: string;
  url?: string;
  points?: number;
  user?: string;
  time?: number;
  commentsCount?: number;
}

export interface CommentsItemType {
  id?: number;
  type?: string;
  title?: string;
  points?: number;
  user?: string;
  time?: number;
  content?: string;
  comments?: Array<CommentsItemType>;
}
