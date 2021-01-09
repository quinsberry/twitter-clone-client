import { axios } from 'core/axios'

import { Tweet } from 'store/tweets/contracts/state'

import { Response } from './apiTypes'

export const TweetsApi = {
  async fetchTweets() {
    const { data } = await axios.get<Response<Tweet[]>>('/tweets')
    return data.data
  },
  async fetchTweetData(id: string) {
    const { data } = await axios.get<Response<Tweet>>(`/tweets/${id}`)
    return data.data
  },
  async addTweet(payload: string) {
    const { data } = await axios.post<Response<Tweet>>('/tweets', {
      text: payload,
    })
    return data.data
  },
}
