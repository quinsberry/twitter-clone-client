import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/SaveAltOutlined'

import { useHomeStyles } from 'pages/Home/styles'

interface TweetProps {
  _id: string
  text: string
  classes: ReturnType<typeof useHomeStyles>
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export const Tweet: React.FC<TweetProps> = ({ _id, text, classes, user }): React.ReactElement => {
  return (
    <Link to={`/home/tweet/${_id}`}>
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
          <Typography className={classes.tweetText} variant="body1" gutterBottom>
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
    </Link>
  )
}
