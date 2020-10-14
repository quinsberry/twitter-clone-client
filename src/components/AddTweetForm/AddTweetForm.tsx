import React from 'react'
import cn from 'classnames'

import { TextareaAutosize, IconButton, CircularProgress, Avatar, Button } from '@material-ui/core'

import { useAddTweetFormStyles } from './styles'
import {
  ImageOutlined as ImageOutlinedIcon,
  EmojiEmotionsOutlined as EmojiIcon,
} from '@material-ui/icons'

interface AddTweetFormProps {
  maxRows?: number
  padding?: string | number
}

const TWEET_MAX_LENGTH = 280
export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
  padding,
}): React.ReactElement => {
  const classes = useAddTweetFormStyles()
  const [text, setText] = React.useState('')
  const textLimitPercent = Math.round((text.length / TWEET_MAX_LENGTH) * 100)
  const maxFormLength = TWEET_MAX_LENGTH - text.length

  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    setText('')
  }

  return (
    <div className={classes.addForm} style={{ padding: padding ? padding : 0 }}>
      <Avatar
        className={classes.addFormAvatar}
        alt={`Mine's avatar`}
        src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <div className={classes.addFormBody}>
        <TextareaAutosize
          value={text}
          onChange={handleChangeTextarea}
          className={classes.addFormTextarea}
          placeholder="What's happening?"
          rowsMax={maxRows}
        />
        <div className={classes.addFormBottom}>
          <div className={cn(classes.addFormFooter)}>
            <IconButton color="primary">
              <ImageOutlinedIcon style={{ fontSize: 26 }} />
            </IconButton>
            <IconButton color="primary">
              <EmojiIcon style={{ fontSize: 26 }} />
            </IconButton>
          </div>
          <div className={classes.addFormBottomRight}>
            {text && (
              <>
                <span>{maxFormLength}</span>
                <div className={classes.addFormCircleProgress}>
                  <CircularProgress
                    variant="static"
                    size={20}
                    thickness={5}
                    value={text.length > TWEET_MAX_LENGTH ? 100 : textLimitPercent}
                    style={text.length > TWEET_MAX_LENGTH - 1 ? { color: 'red' } : {}}
                  />
                  <CircularProgress
                    style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                    variant="static"
                    size={20}
                    thickness={5}
                    value={100}
                  />
                </div>
              </>
            )}
            <Button
              onClick={handleClickAddTweet}
              disabled={text.length > TWEET_MAX_LENGTH}
              color="primary"
              variant="contained">
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
