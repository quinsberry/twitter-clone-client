import { Action } from 'redux'
import { LoadingState, TweetsState } from './state'

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS
  payload: TweetsState['items']
}

export interface SetTweetsLoadingStateInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS
}

export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingStateInterface
  | FetchTweetsActionInterface
