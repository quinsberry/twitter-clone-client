import { createSelector } from 'reselect'
import { RootState } from 'store/store'
import { LoadingState, TweetsState } from './contracts/state'

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectLoadingState = (state: RootState): LoadingState => state.tweets.loadingState

export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items)
