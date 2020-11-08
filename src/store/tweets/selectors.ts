import { RootState } from 'store/store'
import { TweetsState } from './contracts/state'
import { LoadingStatus } from 'store/types'

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectLoadingStatus = (state: RootState): LoadingStatus => selectTweets(state).LoadingStatus

export const selectAddFormState = (state: RootState): LoadingStatus => selectTweets(state).addFormState

export const selectIsTweetsLoading = (state: RootState): boolean => selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean => selectLoadingStatus(state) === LoadingStatus.LOADED

export const selectTweetsItems = (state: RootState) => selectTweets(state).items
