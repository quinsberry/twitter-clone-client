import React from 'react'
import cn from 'classnames'

import { TextareaAutosize, IconButton, CircularProgress, Avatar, Button } from '@material-ui/core'

import { useHomeStyles } from 'pages/Home/styles'
import {
  ImageOutlined as ImageOutlinedIcon,
  EmojiEmotionsOutlined as EmojiIcon,
} from '@material-ui/icons'

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>
}
export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes }): React.ReactElement => {
  return (
    <div className={classes.addForm}>
      <Avatar
        className={classes.tweetAvatar}
        alt={`Mine's avatar`}
        src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <div className={classes.addFormBody}>
        <TextareaAutosize className={classes.addFormTextarea} placeholder="What's happening?" />
        <div className={classes.addFormBottom}>
          <div className={cn(classes.tweetFooter)}>
            <IconButton color="primary">
              <ImageOutlinedIcon style={{ fontSize: 26 }} />
            </IconButton>
            <IconButton color="primary">
              <EmojiIcon style={{ fontSize: 26 }} />
            </IconButton>
          </div>
          <div className={classes.addFormBottomRight}>
            <span>200</span>
            <div className={classes.addFormCircleProgress}>
              <CircularProgress variant="static" size={20} thickness={4} value={10} />
              <CircularProgress
                style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                variant="static"
                size={20}
                thickness={4}
                value={100}
              />
            </div>
            <Button color="primary" variant="contained">
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
