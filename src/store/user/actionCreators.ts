import { LoginFormProps } from 'pages/SignIn/components/LoginModal'
import { SignUpFormProps } from 'pages/SignIn/components/SignUpModal'
import { InferActions, LoadingStatus } from 'store/types'
import { UserState } from './contracts/state'

export const UserActions = {
  setUserData: (payload: UserState['data']) => ({ type: 'user/SET_USER_DATA', payload } as const),
  fetchSignIn: (payload: LoginFormProps) => ({ type: 'user/FETCH_SIGN_IN', payload } as const),
  fetchSignUp: (payload: SignUpFormProps) => ({ type: 'user/FETCH_SIGN_UP', payload } as const),
  userInitialization: () => ({ type: 'user/INITIALIZATION' } as const),
  userInitialized: () => ({ type: 'user/INITIALIZED' } as const),
  setUserDataLoadingStatus: (payload: LoadingStatus) => ({ type: 'user/SET_LOADING_STATUS', payload } as const),
  setUserLoadingStatusDefault: () => ({ type: 'user/SET_LOADING_STATUS_DEFAULT' } as const),
}

export type UserActionsTypes = InferActions<typeof UserActions>
