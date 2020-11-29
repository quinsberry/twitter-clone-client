import produce, { Draft } from 'immer'
import { LoadingStatus } from 'store/types'
import { UsersActionsTypes } from './actionCreators'
import { UsersState } from './contracts/state'

const initialUsersState: UsersState = {
  data: [] as UsersState['data'],
  status: LoadingStatus.NEVER,
}

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActionsTypes) => {
  switch (action.type) {
    case 'users/SET_USERS_DATA':
      draft.data = action.payload
      draft.status = LoadingStatus.LOADED
      break
    case 'users/FETCH_USERS_DATA':
      draft.status = LoadingStatus.LOADING
      break
    case 'users/SET_LOADING_STATE':
      draft.status = action.payload
      break

    default:
      break
  }
}, initialUsersState)
