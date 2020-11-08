import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetAddFormStateInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStatusInterface,
  TweetsActionsType,
} from './contracts/actionsTypes'
import { Tweet, TweetsState } from './contracts/state'
import { LoadingStatus } from 'store/types'

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
})

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
})

export const setTweetsLoadingStatus = (payload: LoadingStatus): SetTweetsLoadingStatusInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})

export const setAddFormState = (payload: LoadingStatus): SetAddFormStateInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})
