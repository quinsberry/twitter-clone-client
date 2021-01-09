import produce, { Draft } from 'immer'
import { LoadingStatus } from 'store/types'
import { UserActionsTypes } from './actionCreators'
import { User, UserState } from './contracts/state'

const initialUserState: UserState = {
  data: {} as User,
  status: LoadingStatus.LOADING,
}

export const userReducer = produce((draft: Draft<UserState>, action: UserActionsTypes) => {
  switch (action.type) {
    case 'user/SET_USER_DATA':
      draft.data = action.payload
      draft.status = LoadingStatus.LOADED
      break
    case 'user/FETCH_SIGN_IN':
      draft.status = LoadingStatus.LOADING
      break
    case 'user/FETCH_SIGN_UP':
      draft.status = LoadingStatus.LOADING
      break
    case 'user/INITIALIZATION':
      draft.status = LoadingStatus.LOADING
      break
    case 'user/INITIALIZED':
      draft.status = LoadingStatus.NEVER
      break
    case 'user/SET_LOADING_STATUS':
      draft.status = action.payload
      break
    case 'user/SET_LOADING_STATUS_DEFAULT':
      draft.status = LoadingStatus.NEVER
      break

    default:
      break
  }
}, initialUserState)
