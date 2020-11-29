import { RootState } from 'store/store'
import { UsersState } from './contracts/state'

export const selectUsersState = (state: RootState): UsersState => state.users

export const selectUsersData = (state: RootState): UsersState['data'] => selectUsersState(state).data

export const selectUsersStatus = (state: RootState): UsersState['status'] => selectUsersState(state).status
