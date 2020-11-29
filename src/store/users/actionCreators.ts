import { LoginFormProps } from 'pages/SignIn/components/LoginModal'
import { InferActions, LoadingStatus } from 'store/types'
import { UsersState } from './contracts/state'

export const UsersActions = {
  setUsers: (payload: UsersState['data']) => ({ type: 'users/SET_USERS_DATA', payload } as const),
  fetchUsers: () => ({ type: 'users/FETCH_USERS_DATA' } as const),
  setUsersLoadingStatus: (payload: LoadingStatus) => ({ type: 'users/SET_LOADING_STATE', payload } as const),
}

export type UsersActionsTypes = InferActions<typeof UsersActions>
