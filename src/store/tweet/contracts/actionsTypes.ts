import { Action } from 'redux'
import { LoadingStatus } from 'store/types'
import { TweetState } from './state'

export enum TweetActionsType {
  SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
  FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

export type TweetActions =
  | SetTweetDataActionInterface
  | SetTweetDataLoadingStatusInterface
  | FetchTweetDataActionInterface

export interface SetTweetDataActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET_DATA
  payload: TweetState['data']
}

export interface SetTweetDataLoadingStatusInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE
  payload: LoadingStatus
}

export interface FetchTweetDataActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET_DATA
  payload: string
}
