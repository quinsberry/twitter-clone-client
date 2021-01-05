import { axios } from 'core/axios'

import { Tweet, TweetsState } from 'store/tweets/contracts/state'

import { Response } from './apiTypes'

export const TweetsApi = {
  async fetchTweets(): Promise<TweetsState['items']> {
    const { data } = await axios.get<Response<TweetsState['items']>>('/tweets')
    return data.data
  },
  async fetchTweetData(id: string): Promise<Tweet> {
    const { data } = await axios.get<Response<Tweet>>(`/tweets/${id}`)
    return data.data
  },
  async addTweet(payload: string): Promise<Tweet> {
    const { data } = await axios.post<Response<Tweet>>('/tweets', {
      text: payload,
    })
    return data.data
  },
}
