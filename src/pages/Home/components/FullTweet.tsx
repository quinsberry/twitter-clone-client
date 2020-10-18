import React from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchTweetData, setTweetData } from 'store/tweet/actionCreators'
import { selectIsTweetLoading, selectTweetData } from 'store/tweet/selectors'

import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/SaveAltOutlined'

import { useHomeStyles } from '../styles'

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

  const {
    user: { fullname, username, avatarUrl },
    text,
  } = tweetData

  return (
    <Paper
      variant="outlined"
      className={cn(classes.tweetsHeader, classes.tweet, classes.fullTweet)}>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
        <Avatar
          className={cn(classes.tweetAvatar, classes.fullTweetAvatar)}
          alt={`${fullname}'s avatar`}
          src={avatarUrl}
        />
        <div>
          <Typography style={{ marginBottom: -1 }}>
            <b>{fullname}</b>
          </Typography>
          <Typography>
            <span className={classes.tweetUserName}>@{username}</span>
            <span className={classes.tweetUserName}> - </span>
            <span className={classes.tweetUserName}>1 h</span>
          </Typography>
        </div>
      </div>
      <Typography style={{ fontSize: 23 }} className={classes.tweetText} variant="h5" gutterBottom>
        {text}
      </Typography>
      <div className={classes.tweetFooter}>
        <div>
          <IconButton color="primary">
            <CommentIcon style={{ fontSize: 18 }} />
          </IconButton>
          <span>1</span>
        </div>
        <div>
          <IconButton color="primary">
            <RepostIcon style={{ fontSize: 18 }} />
          </IconButton>
        </div>
        <div>
          <IconButton color="primary">
            <LikeIcon style={{ fontSize: 18 }} />
          </IconButton>
          <span>1</span>
        </div>
        <div>
          <IconButton color="primary">
            <ShareIcon style={{ fontSize: 18 }} />
          </IconButton>
        </div>
      </div>
    </Paper>
  )
}
