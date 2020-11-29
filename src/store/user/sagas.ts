import { UserActions } from './actionCreators'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from 'services/api/authApi'
import { InferOneAction, LoadingStatus } from 'store/types'
import { User } from './contracts/state'

export type fetchSignInActionType = InferOneAction<typeof UserActions.fetchSignIn>
export type fetchSignUpActionType = InferOneAction<typeof UserActions.fetchSignUp>

export function* fetchSignInRequest({ payload }: fetchSignInActionType) {
  try {
    const data: User = yield call(AuthApi.signIn, payload)
    yield put(UserActions.setUserData(data))
    window.localStorage.setItem('token', data.token)
  } catch (err) {
    yield put(UserActions.setUserDataLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* fetchSignUpRequest({ payload }: fetchSignUpActionType) {
  try {
    const data: User = yield call(AuthApi.signUp, payload)
    yield put(UserActions.setUserDataLoadingStatus(LoadingStatus.LOADED))
  } catch (err) {
    yield put(UserActions.setUserDataLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* userSaga() {
  yield takeLatest('user/FETCH_SIGN_IN', fetchSignInRequest)
  yield takeLatest('user/FETCH_SIGN_UP', fetchSignUpRequest)
}
