export interface StateType {
  arrayNews?: Array<object> | Array<any> | any;
  arrayComments?: Array<object> | Array<any> | any;
}

export interface ActionType {
  type: string;
  payload?: any;
}

export interface AppProps {
  news?: Array<any> | any;
  comments?: Array<any> | any;
  buttonFunction?: any;
}
