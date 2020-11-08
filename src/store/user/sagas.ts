import { UserActions } from './actionCreators'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from 'services/api/authApi'
import { InferOneAction, LoadingStatus } from 'store/types'
import { User } from './contracts/state'

export type fetchSignInActionType = InferOneAction<typeof UserActions.fetchSignIn>

export function* fetchSignInRequest({ payload }: fetchSignInActionType) {
  try {
    const data: User = yield call(AuthApi.signIn, payload)
    yield put(UserActions.setUserData(data))
    window.localStorage.setItem('token', data.token)
  } catch (err) {
    yield put(UserActions.setUserDataLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* userSaga() {
  yield takeLatest('user/FETCH_SIGN_IN', fetchSignInRequest)
}
