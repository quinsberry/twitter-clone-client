import { LoginFormProps } from 'pages/SignIn/components/LoginModal'
import { InferActions, LoadingStatus } from 'store/types'
import { UserState } from './contracts/state'

export const UserActions = {
  setUserData: (payload: UserState['data']) => ({ type: 'user/SET_USER_DATA', payload } as const),
  fetchSignIn: (payload: LoginFormProps) => ({ type: 'user/FETCH_SIGN_IN', payload } as const),
  setUserDataLoadingStatus: (payload: LoadingStatus) => ({ type: 'user/SET_LOADING_STATE', payload } as const),
}

export type UserActionsTypes = InferActions<typeof UserActions>
