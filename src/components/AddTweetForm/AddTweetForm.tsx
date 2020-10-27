import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import { fetchAddTweet } from 'store/tweets/actionCreators'
import { selectAddFormState } from 'store/tweets/selectors'
import { LoadingState } from 'store/tweets/contracts/state'

import Alert from '@material-ui/lab/Alert'

import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import { useAddTweetFormStyles } from './styles'
import ImageIcon from '@material-ui/icons/ImageOutlined'
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined'

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
  const dispatch = useDispatch()
  const [text, setText] = React.useState('')
  const addFormState = useSelector(selectAddFormState)

  const textLimitPercent = Math.round((text.length / TWEET_MAX_LENGTH) * 100)
  const maxFormLength = TWEET_MAX_LENGTH - text.length

  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleClickAddTweet()
    }
  }

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text))
    setText('')
  }

  return (
    <>
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
            onKeyDown={handleSubmit}
          />
          <div className={classes.addFormBottom}>
            <div className={cn(classes.addFormFooter)}>
              <IconButton color="primary">
                <ImageIcon style={{ fontSize: 26 }} />
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
                disabled={
                  addFormState === LoadingState.LOADING || !text || text.length > TWEET_MAX_LENGTH
                }
                color="primary"
                variant="contained">
                {addFormState === LoadingState.LOADING ? (
                  <CircularProgress color="inherit" size={18} />
                ) : (
                  'Tweet'
                )}
              </Button>
            </div>
          </div>
          {addFormState === LoadingState.ERROR && (
            <Alert severity="error">{'We have an error with adding tweet :('}</Alert>
          )}
        </div>
      </div>
    </>
  )
}
