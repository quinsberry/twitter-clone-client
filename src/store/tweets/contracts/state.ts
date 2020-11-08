import { LoadingStatus } from 'store/types'
import { User } from 'store/user/contracts/state'

export interface Tweet {
  _id: string
  text: string
  replies: Array<any>
  retweets: Array<any>
  likes: Array<any>
  user: User
  createdAt: string
  updatedAt: string
}

export interface TweetsState {
  items: Tweet[]
  LoadingStatus: LoadingStatus
  addFormState: LoadingStatus
}
