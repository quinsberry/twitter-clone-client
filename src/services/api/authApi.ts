import { axios } from 'core/axios'

import { LoginFormProps } from 'pages/SignIn/components/LoginModal'
import { SignUpFormProps } from 'pages/SignIn/components/SignUpModal'
import { User } from 'store/user/contracts/state'
import { Response } from './apiTypes'

export const AuthApi = {
  async signIn(postData: LoginFormProps): Promise<User> {
    const { data } = await axios.post<Response<User>>('/auth/signin', postData)
    return data.data
  },
  async signUp(postData: SignUpFormProps): Promise<User> {
    const { data } = await axios.post<Response<User>>('/auth/signup', postData)
    return data.data
  },
  async getMe(): Promise<User> {
    const { data } = await axios.get<Response<User>>('/users/me')
    return data.data
  },
}
