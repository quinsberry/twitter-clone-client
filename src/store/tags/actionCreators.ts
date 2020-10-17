import {
  FetchTagsActionInterface,
  SetTagsActionInterface,
  SetTagsLoadingStateInterface,
  TagsActionsType,
} from './contracts/actionsTypes'
import { LoadingState, TagsState } from './contracts/state'

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
})

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionsType.FETCH_TAGS,
})
