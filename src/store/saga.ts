import { all } from 'redux-saga/effects'
import { tagsSaga } from './tags/sagas'
import { tweetSaga } from './tweet/sagas'
import { tweetsSaga } from './tweets/sagas'
import { userSaga } from './user/sagas'

export function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga(), tweetSaga(), userSaga()])
}
