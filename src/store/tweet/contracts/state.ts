import { Tweet } from 'store/tweets/contracts/state'
import { LoadingStatus } from 'store/types'

export interface TweetState {
  data?: Tweet
  LoadingStatus: LoadingStatus
}
