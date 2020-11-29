import { UsersActions } from './actionCreators'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from 'services/api/authApi'
import { InferOneAction, LoadingStatus } from 'store/types'
import { User } from 'store/user/contracts/state'

export type fetchUsersType = InferOneAction<typeof UsersActions.fetchUsers>

export function* fetchUsersRequest() {
  // try {
  //   const data: User[] = yield call(AuthApi.signIn, payload)
  //   yield put(UsersActions.setUsers(data))
  // } catch (err) {
  //   yield put(UsersActions.setUsersLoadingStatus(LoadingStatus.ERROR))
  // }
}

export function* usersSaga() {
  // yield takeLatest('user/FETCH_SIGN_IN', fetchUserRequest)
}
