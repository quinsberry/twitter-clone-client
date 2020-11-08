import { combineReducers } from 'redux'
import { tagsReducer } from './tags/reducer'
import { tweetReducer } from './tweet/reducer'
import { tweetsReducer } from './tweets/reducer'
import { userReducer } from './user/reducer'

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
  tweet: tweetReducer,
  user: userReducer,
})
