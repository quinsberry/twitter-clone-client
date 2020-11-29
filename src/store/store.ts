import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { TweetsState } from './tweets/contracts/state'
import { TweetState } from './tweet/contracts/state'
import { TagsState } from './tags/contracts/state'
import { UserState } from './user/contracts/state'
import { UsersState } from './users/contracts/state'

import { rootReducer } from './rootReducer'
import { rootSaga } from './saga'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export interface RootState {
  tweets: TweetsState
  tags: TagsState
  tweet: TweetState
  user: UserState
  users: UsersState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
