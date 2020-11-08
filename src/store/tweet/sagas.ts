import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from 'services/api/tweetsApi'
import { Tweet } from 'store/tweets/contracts/state'
import { setTweetData, setTweetDataLoadingStatus } from './actionCreators'
import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/actionsTypes'
import { LoadingStatus } from 'store/types'

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId)
    yield put(setTweetData(data))
  } catch (err) {
    yield put(setTweetDataLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}
