import {
  FetchTweetDataActionInterface,
  SetTweetDataActionInterface,
  SetTweetDataLoadingStatusInterface,
  TweetActionsType,
} from './contracts/actionsTypes'
import { TweetState } from './contracts/state'
import { LoadingStatus } from 'store/types'

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
})

export const setTweetDataLoadingStatus = (payload: LoadingStatus): SetTweetDataLoadingStatusInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
})
