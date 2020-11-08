import { call, put, takeLatest } from 'redux-saga/effects'
import { TagsApi } from 'services/api/tagsApi'
import { setTags, setTagsLoadingStatus } from './actionCreators'
import { TagsActionsType } from './contracts/actionsTypes'
import { LoadingStatus } from 'store/types'

export function* fetchTagsRequest() {
  try {
    const items = yield call(TagsApi.fetchTags)
    yield put(setTags(items))
  } catch (err) {
    yield put(setTagsLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}
