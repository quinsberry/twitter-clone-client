import {
  FetchTweetDataActionInterface,
  SetTweetDataActionInterface,
  SetTweetDataLoadingStateInterface,
  TweetActionsType,
} from './contracts/actionsTypes'
import { LoadingState, TweetState } from './contracts/state'

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
})

export const setTweetDataLoadingState = (
  payload: LoadingState,
): SetTweetDataLoadingStateInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
})
