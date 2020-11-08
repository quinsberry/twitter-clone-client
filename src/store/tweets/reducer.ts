import produce, { Draft } from 'immer'
import { TweetsActions, TweetsActionsType } from './contracts/actionsTypes'
import { TweetsState } from './contracts/state'
import { LoadingStatus } from 'store/types'

const initialTweetsState: TweetsState = {
  items: [],
  addFormState: LoadingStatus.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload
      draft.LoadingStatus = LoadingStatus.LOADED
      break
    case TweetsActionsType.FETCH_TWEETS:
      draft.items = []
      draft.LoadingStatus = LoadingStatus.LOADING
      break
    case TweetsActionsType.SET_ADD_FORM_STATE:
      draft.addFormState = action.payload
      break
    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.addFormState = LoadingStatus.LOADING
      break
    case TweetsActionsType.ADD_TWEET:
      draft.items.splice(0, 0, action.payload)
      draft.addFormState = LoadingStatus.LOADED
      break
    case TweetsActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload
      break

    default:
      break
  }
}, initialTweetsState)
