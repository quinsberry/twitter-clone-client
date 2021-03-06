import { axios } from 'core/axios'

import { TagsState } from 'store/tags/contracts/state'

export const TagsApi = {
  fetchTags(): Promise<TagsState['items']> {
    return axios.get('/themes').then(({ data }) => data)
  },
}
