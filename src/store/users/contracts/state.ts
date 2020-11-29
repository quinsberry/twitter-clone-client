import { LoadingStatus } from 'store/types'
import { User } from 'store/user/contracts/state'

export interface UsersState {
  data: User[]
  status: LoadingStatus
}
