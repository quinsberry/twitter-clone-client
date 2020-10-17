import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from 'services/api/tweetsApi'
import { setTweets, setTweetsLoadingState } from './actionCreators'
import { TweetsActionsType } from './contracts/actionsTypes'
import { LoadingState } from './contracts/state'

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
  } catch (err) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}