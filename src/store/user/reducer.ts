import produce, { Draft } from 'immer'
import { LoadingStatus } from 'store/types'
import { UserActionsTypes } from './actionCreators'
import { User, UserState } from './contracts/state'

const initialUserState: UserState = {
  data: {} as User,
  status: LoadingStatus.NEVER,
}

export const userReducer = produce((draft: Draft<UserState>, action: UserActionsTypes) => {
  switch (action.type) {
    case 'user/SET_USER_DATA':
      draft.data = action.payload
      draft.status = LoadingStatus.LOADED
      break
    case 'user/SET_LOADING_STATE':
      draft.status = action.payload
      break

    default:
      break
  }
}, initialUserState)
