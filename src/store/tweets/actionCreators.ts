import {
  FetchTweetsActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateInterface,
  TweetsActionsType,
} from './contracts/actionsTypes'
import { LoadingState, TweetsState } from './contracts/state'

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})
