import { NewsItemType, CommentsItemType } from './types';

export interface AppProps {
  news?: Array<NewsItemType>;
  comments?: Array<CommentsItemType>;
}

export interface HeaderProps {
  page: string;
  updateNews?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  updateComments?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface CommentsProps {
  comments: Array<CommentsItemType> | undefined;
}
