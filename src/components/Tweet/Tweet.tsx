import React from 'react'
import { useHistory } from 'react-router-dom'
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
import { User } from 'store/user/contracts/state'
import { formatDate } from '@utils/formatDate'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

interface TweetProps {
  _id: string
  text: string
  createdAt: string
  classes: ReturnType<typeof useHomeStyles>
  user: User
}

export const Tweet: React.FC<TweetProps> = ({ _id, text, createdAt, classes, user }): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  console.log('user: ', user)

  const history = useHistory()

  const handleTweetClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()
    history.push(`/home/tweet/${_id}`)
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const options = ['Edit', 'Delete']

  return (
    <div onClick={handleTweetClick}>
      <Paper variant="outlined" className={cn(classes.tweetsHeader, classes.tweet)}>
        <Avatar className={classes.tweetAvatar} alt={`${user.fullname}'s avatar`} src={user.avatarUrl} />
        <div style={{ width: '100%' }}>
          <div style={{ paddingBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <b style={{ marginRight: 4 }}>{user.fullname}</b>
              <span className={classes.tweetUserName}>@{user.username}</span>
              <span className={classes.tweetUserName}> - </span>
              <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
            </div>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                size="small"
                color="secondary"
                onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleMenuClose}>
                {options.map((option) => (
                  <MenuItem key={option} onClick={handleMenuClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
          <Typography className={classes.tweetText} variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton color="secondary">
                <CommentIcon style={{ fontSize: 18 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="secondary">
                <RepostIcon style={{ fontSize: 18 }} />
              </IconButton>
            </div>
            <div>
              <IconButton color="secondary">
                <LikeIcon style={{ fontSize: 18 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="secondary">
                <ShareIcon style={{ fontSize: 18 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}
