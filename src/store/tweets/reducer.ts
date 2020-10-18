import produce, { Draft } from 'immer'
import { TweetsActions, TweetsActionsType } from './contracts/actionsTypes'
import { LoadingState, TweetsState } from './contracts/state'

const initialTweetsState: TweetsState = {
  items: [],
  addFormState: LoadingState.NEVER,
  loadingState: LoadingState.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break
    case TweetsActionsType.FETCH_TWEETS:
      draft.items = []
      draft.loadingState = LoadingState.LOADING
      break
    case TweetsActionsType.SET_ADD_FORM_STATE:
      draft.addFormState = action.payload
      break
    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.addFormState = LoadingState.LOADING
      break
    case TweetsActionsType.ADD_TWEET:
      draft.items.splice(0, 0, action.payload)
      draft.addFormState = LoadingState.LOADED
      break
    case TweetsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break

    default:
      break
  }
}, initialTweetsState)
