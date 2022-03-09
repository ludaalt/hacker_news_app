import { NewsItemType, CommentsItemType } from './types';
import { MouseEventHandler } from 'react';

export interface AppProps {
  news?: Array<NewsItemType>;
  comments?: Array<CommentsItemType> | object;
}

export interface HeaderProps {
  page: string;
  updateNews?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  updateComments?: (id: number) => void;
}

export interface CommentsProps {
  // comments: Array<CommentsItemType> | undefined | any | CommentsItemType;
  comments?: CommentsItemType;
}

export interface ButtonProps {
  title: string;
  className?: string;
  handleFunction?: MouseEventHandler<HTMLButtonElement>;
  handleCommentsFunction?: (id: number) => void;
}

export interface MainPageProps {
  updateNews: () => void;
}

export interface PostPageProps {
  updateComments: (id: number) => void;
}

export interface UpdateCommentsButtonProps {
  title: string;
  updateComments?: (id: number) => void;
}

export interface ShowCommentsButtonProps {
  value: string;
  showComments: MouseEventHandler<HTMLDivElement>;
}

export interface ShowCommentsContainerProps {
  item: CommentsItemType;
}
