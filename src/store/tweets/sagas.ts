import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from 'services/api/tweetsApi'
import { addTweet, setAddFormState, setTweets, setTweetsLoadingStatus } from './actionCreators'
import { FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionsTypes'
import { LoadingStatus } from 'store/types'

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
  } catch (err) {
    yield put(setTweetsLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
  try {
    const item = yield call(TweetsApi.addTweet, payload)
    yield put(addTweet(item))
  } catch (err) {
    yield put(setAddFormState(LoadingStatus.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
