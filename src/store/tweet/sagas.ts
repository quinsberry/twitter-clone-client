import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from 'services/api/tweetsApi'
import { Tweet } from 'store/tweets/contracts/state'
import { setTweetData, setTweetDataLoadingState } from './actionCreators'
import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/actionsTypes'
import { LoadingState } from './contracts/state'

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
  try {
    const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId)
    yield put(setTweetData(data[0]))
  } catch (err) {
    yield put(setTweetDataLoadingState(LoadingState.ERROR))
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}
