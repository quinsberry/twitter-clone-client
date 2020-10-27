export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface User {
  _id: string
  fullname: string;
  username: string;
  avatarUrl: string;
  confirmed: boolean
  email: string
  createdAt: string
  updatedAt: string
}

export interface Tweet {
  _id: string
  text: string
  replies: Array<any>
  retweets: Array<any>
  likes: Array<any>
  user: User
  createdAt: string
  updatedAt: string
}

export interface TweetsState {
  items: Tweet[]
  loadingState: LoadingState
  addFormState: LoadingState
}
