import { createSelector } from 'reselect'
import { RootState } from 'store/store'
import { TagsState } from './contracts/state'
import { LoadingStatus } from 'store/types'

export const selectTags = (state: RootState): TagsState => state.tags

export const selectLoadingStatus = (state: RootState): LoadingStatus => state.tags.LoadingStatus

export const selectIsTagsLoading = (state: RootState): boolean => selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsTagsLoaded = (state: RootState): boolean => selectLoadingStatus(state) === LoadingStatus.LOADED

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items)
