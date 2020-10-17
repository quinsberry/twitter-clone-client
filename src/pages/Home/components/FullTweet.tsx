import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchTweetData, setTweetData } from 'store/tweet/actionCreators'
import { selectIsTweetLoading, selectTweetData } from 'store/tweet/selectors'

import { Tweet } from 'components'

import { useHomeStyles } from '../styles'
import { CircularProgress } from '@material-ui/core'

interface FullTweetProps {}
export const FullTweet: React.FC<FullTweetProps> = (): React.ReactElement | null => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()
  const params: { id: string } = useParams()
  const tweetData = useSelector(selectTweetData)
  const isLoading = useSelector(selectIsTweetLoading)

  React.useEffect(() => {
    if (params.id) {
      dispatch(fetchTweetData(params.id))
    }

    return () => {
      dispatch(setTweetData(undefined))
    }
  }, [dispatch, params.id])

  if (isLoading) {
    return (
      <div className={classes.tweetsCentered}>
        <CircularProgress />
      </div>
    )
  }

  if (!tweetData) return null

  return <Tweet classes={classes} {...tweetData} />
}
