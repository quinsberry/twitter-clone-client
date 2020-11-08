import { LoadingStatus } from 'store/types'
import {
  FetchTagsActionInterface,
  SetTagsActionInterface,
  SetTagsLoadingStatusInterface,
  TagsActionsType,
} from './contracts/actionsTypes'
import { TagsState } from './contracts/state'

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
})

export const setTagsLoadingStatus = (payload: LoadingStatus): SetTagsLoadingStatusInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionsType.FETCH_TAGS,
})
