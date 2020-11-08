import { LoadingStatus } from 'store/types'

export interface User {
  _id: string
  fullname: string
  username: string
  avatarUrl: string
  confirmed: boolean
  email: string
  __v: number
  token: string
}

export interface UserState {
  data: User
  status: LoadingStatus
}
