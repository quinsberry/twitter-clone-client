import React from 'react'
import cn from 'classnames'

import { Grid, Paper, IconButton, Typography, Avatar } from '@material-ui/core'
import {
  ChatBubbleOutlineOutlined as CommentIcon,
  RepeatOutlined as RepostIcon,
  FavoriteBorderOutlined as LikeIcon,
  SaveAltOutlined as ShareIcon,
} from '@material-ui/icons'

import { useHomeStyles } from 'pages/Home/styles'

interface TweetProps {
  text: string
  classes: ReturnType<typeof useHomeStyles>
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export const Tweet: React.FC<TweetProps> = ({ text, classes, user }): React.ReactElement => {
  return (
    <Paper variant="outlined" className={cn(classes.tweetsHeader, classes.tweet)}>
      <Avatar
        className={classes.tweetAvatar}
        alt={`${user.fullname}'s avatar`}
        src={user.avatarUrl}
      />
      <div>
        <Typography>
          <b>{user.fullname}</b> <span className={classes.tweetUserName}>{user.username}</span>
          <span className={classes.tweetUserName}> - </span>
          <span className={classes.tweetUserName}>1 h</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
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
      </div>
    </Paper>
  )
}
