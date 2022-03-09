export interface StateType {
  arrayNews?: Array<NewsItemType>;
  arrayComments?: Array<CommentsItemType> | object;
}

export interface NewsItemType {
  id?: number;
  index?: number;
  title: string;
  url?: string;
  points: number;
  user: string;
  time: number;
  commentsCount?: number;
}

export interface CommentsItemType {
  id: number;
  type: string;
  title: string;
  points: number;
  user: string;
  time: number;
  content: string;
  comments: Array<CommentsItemType> | undefined;
}
