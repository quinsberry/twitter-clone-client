import { RootState } from 'store/store'
import { LoadingStatus } from 'store/types'
import { UserState } from './contracts/state'

export const selectUserState = (state: RootState): UserState => state.user

export const selectUserData = (state: RootState) => selectUserState(state).data

export const selectIsAuth = (state: RootState): boolean => Object.keys(selectUserData(state)).length > 0

export const selectUserStatus = (state: RootState) => selectUserState(state).status

export const selectUserIsLoading = (state: RootState): boolean =>
  selectUserState(state).status === LoadingStatus.LOADING
